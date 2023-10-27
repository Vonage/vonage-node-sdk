import { XMLParser } from 'fast-xml-parser';
import FormData from 'form-data';
import { AuthenticationType, Client } from '@vonage/server-client';
import { HTTPMethods, VetchError, VetchOptions } from '@vonage/vetch';
import pick from 'lodash.pick';
import {
  MeetingRoomPageResponse,
  MeetingRoomResponse,
  RecordingResponse,
  RecordingResponsePage,
  ThemeResponse,
  UrlResponse,
  MeetingRoomParams,
  MeetingRoom,
  Recording,
  DialInNumber,
  Theme,
} from './types';
import { LogoType } from './enums';
import { existsSync, readFileSync } from 'fs';

/**
 * Converts an API response for a meeting room to the SDK format.
 *
 * @param {MeetingRoomResponse} room - The meeting room response from the API.
 * @return {MeetingRoom} A meeting room object in the SDK format.
 */
const apiRoomToSdk = (room: MeetingRoomResponse): MeetingRoom => {
  const links = room._links;
  delete room._links;

  const sdkRoom = {
    ...Client.transformers.camelCaseObjectKeys(room, true),
    hostUrl: links?.host_url?.href,
    guestUrl: links?.guest_url?.href,
  };


  return sdkRoom as MeetingRoom;
};

/**
 * Converts an API response for a recording to the SDK format.
 *
 * @param {RecordingResponse} recording - The recording response from the API.
 * @return {Recording} A recording object in the SDK format.
 */
const apiRecordingToSdk = (recording: RecordingResponse): Recording => ({
  ...Client.transformers.camelCaseObjectKeys(recording),
  url: recording?._links?.url?.href,
}) as Recording;

/**
 * Provides methods for interacting with meetings, rooms, recordings, and themes.
 */
export class Meetings extends Client {
  authType = AuthenticationType.JWT;

  /**
   * Used to keep the form boundary consistent when uploading files
   */
  FORM_BOUNDARY = '-------------------------Vonage-Node_SDK';

  /**
   * List of properties from the room that can be written
   */
  ROOM_WRITE_KEYS = [
    'display_name',
    'metadata',
    'type',
    'expires_at',
    'recording_options.auto_record',
    'recording_options.record_only_owner',
    'expire_after_use',
    'theme_id',
    'join_approval_level',
    'initial_join_options.microphone_state',
    'callback_urls.rooms_callback_url',
    'callback_urls.sessions_callback_url',
    'callback_urls.recordings_callback_url',
    'available_features.is_recording_available',
    'available_features.is_chat_available',
    'available_features.is_whiteboard_available',
  ];

  /**
   * List of properties from the theme that can be written
   */
  THEME_WRITE_KEYS = [
    'theme_name',
    'main_color',
    'brand_text',
    'short_company_url',
  ];

  /**
   * Retrieves a list of meeting rooms until there are no more pages
   *
   * @param {MeetingRoomParams} params - Optional parameters for pagination.
   * @return {AsyncGenerator<MeetingRoom, void, undefined>} An async generator of meeting rooms.
   */
  async *getRooms(
    params: MeetingRoomParams = {},
  ): AsyncGenerator<MeetingRoom, void & MeetingRoom, undefined> {
    let startId = params?.startId || null;

    do {
      if (startId) {
        params.startId = startId;
      }

      const resp = await this.getRoomPage(params);

      const rooms = (resp._embedded || []).map(apiRoomToSdk);

      yield* rooms;
      const nextLink = resp._links?.next?.href;

      startId = null;
      if (nextLink) {
        const nextLinkUrl = new URL(nextLink);
        startId = nextLinkUrl.searchParams.get('start_id');
      }
    } while (startId);
  }

  /**
   * Retrieves a page of meeting rooms based on the provided parameters.
   *
   * @param {MeetingRoomParams} params - Optional parameters for pagination.
   * @return {Promise<MeetingRoomPageResponse>} A promise that resolves to a page of meeting rooms.
   */
  async getRoomPage(
    params: MeetingRoomParams = {},
  ): Promise<MeetingRoomPageResponse> {
    const resp = await this.sendGetRequest<MeetingRoomPageResponse>(
      `${this.config.meetingsHost}/v1/meetings/rooms`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data;
  }

  /**
   * Retrieves a meeting room by its ID.
   *
   * @param {string} roomId - The ID of the meeting room to retrieve.
   * @return {Promise<MeetingRoom>} A promise that resolves to the meeting room.
   */
  async getRoom(roomId: string): Promise<MeetingRoom> {
    const resp = await this.sendGetRequest<MeetingRoomResponse>(
      `${this.config.meetingsHost}/v1/meetings/rooms/${roomId}`,
    );

    return apiRoomToSdk(resp.data);
  }

  /**
   * Creates a new meeting room.
   *
   * @param {MeetingRoom} room - The meeting room object to create.
   * @return {Promise<MeetingRoom>} A promise that resolves to the created meeting room.
   */
  async createRoom(room: MeetingRoom): Promise<MeetingRoom> {
    const resp = await this.sendPostRequest<MeetingRoomResponse>(
      `${this.config.meetingsHost}/v1/meetings/rooms`,
      pick(
        Client.transformers.snakeCaseObjectKeys(room, true),
        this.ROOM_WRITE_KEYS,
      ),
    );

    return apiRoomToSdk(resp.data);
  }

  /**
   * Updates an existing meeting room.
   *
   * @param {string} roomId - The ID of the meeting room to update.
   * @param {MeetingRoom} room - The meeting room object with updated information.
   * @return {Promise<MeetingRoom>} A promise that resolves to the updated meeting room.
   */
  async updateRoom(roomId: string, room: MeetingRoom): Promise<MeetingRoom> {
    const resp = await this.sendPatchRequest<MeetingRoomResponse>(
      `${this.config.meetingsHost}/v1/meetings/rooms/${roomId}`,
      {
        update_options: pick(
          Client.transformers.snakeCaseObjectKeys(room, true),
          this.ROOM_WRITE_KEYS,
        ),
      },
    );

    return apiRoomToSdk(resp.data);
  }

  /**
   * Retrieves a recording by its ID.
   *
   * @param {string} recordingId - The ID of the recording to retrieve.
   * @return {Promise<Recording>} A promise that resolves to the recording.
   */
  async getRecording(recordingId: string): Promise<Recording> {
    const resp = await this.sendGetRequest<RecordingResponse>(
      `${this.config.meetingsHost}/v1/meetings/recordings/${recordingId}`,
    );

    return apiRecordingToSdk(resp.data);
  }

  /**
   * Retrieves recordings associated with a session by its ID until there are no
   * more recordings
   *
   * @remarks
   * All the recordings will be returned in one request. There could be a large
   * number of recordings.
   *
   * @param {string} sessionId - The ID of the session for which to retrieve recordings.
   * @return {AsyncGenerator<Recording, void, undefined>} An async generator that yields recordings associated with the session.
   */
  async *getSessionRecordings(
    sessionId: string,
  ): AsyncGenerator<Recording, void & Recording, undefined> {
    const resp = await this.sendGetRequest<RecordingResponsePage>(
      `${this.config.meetingsHost}/v1/meetings/sessions/${sessionId}`,
    );

    const recordings = (resp.data?._embedded?.recordings || []).map(
      apiRecordingToSdk,
    );

    yield* recordings;
  }

  /**
   * Deletes a recording by its ID.
   *
   * @param {string} recordingId - The ID of the recording to delete.
   * @return {Promise<void>} A promise that resolves when the recording is successfully deleted.
   */
  async deleteRecording(recordingId: string): Promise<void> {
    await this.sendDeleteRequest(
      `${this.config.meetingsHost}/v1/meetings/recordings/${recordingId}`,
    );
  }

  /**
   * Retrieves a list of dial-in numbers.
   *
   * @remarks
   * All numbers will be returned in one request
   *
   * @return {AsyncGenerator<DialInNumber, void, undefined>} An asynchronous generator that yields dial-in numbers.
   */
  async *getDialInNumbers(): AsyncGenerator<
    DialInNumber,
    void & DialInNumber,
    undefined
    > {
    const resp = await this.sendGetRequest<DialInNumber[]>(
      `${this.config.meetingsHost}/v1/meetings/dial-in-numbers`,
    );

    const numbers = (resp.data || []).map(
      (number: DialInNumber): DialInNumber =>
      Client.transformers.camelCaseObjectKeys(
        number,
        false
      ) as DialInNumber,
    );

    yield* numbers
  }

  /**
   * Retrieves a list of themes.
   *
   * @remarks
   * All themes are returned in one request
   *
   * @return {AsyncGenerator<Theme, void, undefined>} An asynchronous generator that yields themes.
   */
  async *getThemes(): AsyncGenerator<Theme, void & Theme, undefined> {
    const resp = await this.sendGetRequest<ThemeResponse[]>(
      `${this.config.meetingsHost}/v1/meetings/themes`,
    );

    const themes = (resp.data || []).map((theme: ThemeResponse): Theme =>
      Client.transformers.camelCaseObjectKeys(theme, false) as Theme,
    );

    yield* themes;
  }

  /**
   * Retrieves a theme by its theme ID.
   *
   * @param {string} themeId - The ID of the theme to retrieve.
   * @return {Promise<Theme>} A Promise that resolves to the retrieved theme.
   */
  async getTheme(themeId: string): Promise<Theme> {
    const resp = await this.sendGetRequest<ThemeResponse>(
      `${this.config.meetingsHost}/v1/meetings/themes/${themeId}`,
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as Theme;
  }

  /**
   * Deletes a theme by its theme ID.
   *
   * @param {string} themeId - The ID of the theme to delete.
   * @param {boolean} [force=false] - Whether to force the deletion even if it's associated with rooms.
   * @return {Promise<void>} A Promise that resolves when the theme is successfully deleted.
   */
  async deleteTheme(themeId: string, force: boolean = false): Promise<void> {
    await this.sendRequest({
      url: `${this.config.meetingsHost}/v1/meetings/themes/${themeId}`,
      method: HTTPMethods.DELETE,
      ...(force ? { params: { force: 'true' } } : {}),
    } as VetchOptions);
  }

  /**
   * Creates a new theme with the provided theme details.
   *
   * @param {Theme} theme - The theme details to create.
   * @return {Promise<Theme>} A Promise that resolves with the created theme.
   */
  async createTheme(theme: Theme): Promise<Theme> {
    const resp = await this.sendPostRequest<ThemeResponse>(
      `${this.config.meetingsHost}/v1/meetings/themes`,
      pick(
        Client.transformers.snakeCaseObjectKeys(theme, true),
        this.THEME_WRITE_KEYS,
      ),
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as Theme;
  }

  /**
   * Updates an existing theme with the provided theme details.
   *
   * @param {string} themeId - The ID of the theme to update.
   * @param {Theme} theme - The updated theme details.
   * @return {Promise<Theme>} A Promise that resolves with the updated theme.
   */
  async updateTheme(themeId: string, theme: Theme): Promise<Theme> {
    const resp = await this.sendPatchRequest<ThemeResponse>(
      `${this.config.meetingsHost}/v1/meetings/themes/${themeId}`,
      {
        update_details: pick(
          Client.transformers.snakeCaseObjectKeys(theme, true),
          this.THEME_WRITE_KEYS,
        ),
      },
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as Theme;
  }

  /**
   * Retrieves a list of meeting rooms associated with a specific theme. This will
   * keep calling the API until there are no more pages
   *
   * @param {string} themeId - The ID of the theme for which to retrieve meeting rooms.
   * @param {MeetingRoomParams} params - Optional parameters to filter and paginate the results.
   * @return {AsyncGenerator<MeetingRoom, void, undefined>} An async generator that yields meeting rooms associated with the theme.
   */
  async *getRoomsForTheme(
    themeId: string,
    params: MeetingRoomParams = {},
  ): AsyncGenerator<MeetingRoom, void & MeetingRoom, undefined> {
    let startId = params?.startId || null;
    do {
      if (startId) {
        params.startId = startId;
      }

      const resp = await this.getRoomsForThemePage(themeId, params);
      const rooms = (resp._embedded || []).map(apiRoomToSdk);

      yield* rooms;
      const nextLink = resp._links?.next?.href;

      startId = null;
      if (nextLink) {
        const nextLinkUrl = new URL(nextLink);
        startId = nextLinkUrl.searchParams.get('start_id');
      }
    } while (startId);
  }

  /**
   * Retrieves a page of meeting rooms associated with a specific theme.
   *
   * @param {string} themeId - The ID of the theme for which to retrieve meeting rooms.
   * @param {MeetingRoomParams} params - Optional parameters to filter and paginate the results.
   * @return {Promise<MeetingRoomPageResponse>} A promise that resolves to a page of meeting rooms associated with the theme.
   */
  async getRoomsForThemePage(
    themeId: string,
    params: MeetingRoomParams = {},
  ): Promise<MeetingRoomPageResponse> {
    const resp = await this.sendGetRequest<MeetingRoomPageResponse>(
      `${this.config.meetingsHost}/v1/meetings/themes/${themeId}/rooms`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data;
  }

  /**
   * Sets the default theme for the application.
   *
   * @param {string} themeId - The ID of the theme to set as the default theme.
   * @return {Promise<true>} A promise that resolves to `true` when the default theme is set successfully.
   */
  async setDefaultTheme(themeId: string): Promise<true> {
    await this.sendPatchRequest<ThemeResponse>(
      `${this.config.meetingsHost}/v1/meetings/applications`,
      {
        update_details: {
          default_theme_id: themeId,
        },
      },
    );

    return true;
  }

  /**
   * Uploads an icon (logo) to a theme.
   *
   * @remarks
   * To add icons and logos to a theme, they first need to be uploaded to the
   * Meetings API AWS bucket, and then paired with the respective theme. You
   * should also ensure that your Logos and Favicons adhere to the Image.
   *
   * @see Uploading Icons and Logos {@link https://developer.vonage.com/en/meetings/guides/upload-icons-logo}
   *
   * @param {string} themeId - The ID of the theme to which the icon will be attached.
   * @param {LogoType} logo - The type of logo to upload (e.g., LogoType.WHITE, LogoType.COLORED).
   * @param {string} logoFile - The file path of the logo to upload.
   * @return {Promise<true>} A promise that resolves to `true` when the icon is uploaded and attached to the theme successfully.
   * @throws {Error} If the file specified by `logoFile` does not exist or if the upload fails.
   */
  async uploadIcon(
    themeId: string,
    logo: LogoType,
    logoFile: string,
  ): Promise<true> {
    if (!existsSync(logoFile)) {
      throw new Error(`File ${logoFile} does not exist`);
    }

    const urlResponse = await this._getIconUploadUrl(logo);

    await this._uploadToAws(urlResponse, logoFile);

    let message = 'FATAL ERROR';
    try {
      await this.sendPutRequest<ThemeResponse>(
        `${this.config.meetingsHost}/v1/meetings/themes/${themeId}/finalizeLogos`,
        {
          keys: [urlResponse.fields.key],
        },
      );

      return true;
    } catch (apiError: VetchError<unknown> | unknown) {
      if (apiError instanceof Error) {
        message = apiError.message;
      }

      if (apiError instanceof VetchError) {
        const errors = apiError?.response?.data?.errors || [];
        message = errors[0]?.code || 'FATAL ERROR';
      }
    }

    throw new Error(`Could not attach image to theme: ${message}`);
  }

  /**
   * Uploads a file to an AWS S3 bucket using the provided URL and fields.
   *
   * @param {UrlResponse} urlResponse - The URL and fields required for the AWS S3 upload.
   * @param {string} logoFile - The file path of the file to upload.
   * @return {Promise<true>} A promise that resolves to `true` when the file is successfully uploaded to AWS S3.
   * @throws {Error} If the upload fails or encounters an error.
   */
  protected async _uploadToAws(
    { url, fields }: UrlResponse,
    logoFile: string,
  ): Promise<true> {
    const awsForm = new FormData();
    awsForm.setBoundary(this.FORM_BOUNDARY);
    for (const [key, value] of Object.entries(fields)) {
      awsForm.append(key, value);
    }
    awsForm.append('file', readFileSync(logoFile));

    let message;
    try {
      await this.sendRequest({
        url: url,
        data: awsForm.toString(),
        method: HTTPMethods.POST,
      } as VetchOptions);
      return true;
    } catch (apiError: VetchError<unknown> | unknown) {
      if (apiError instanceof Error) {
        message = apiError.message;
      }

      if (apiError instanceof VetchError) {
        const errorResponse = apiError?.response?.data as string || '';
        const parser = new XMLParser();
        const output = parser.parse(errorResponse);
        message = output?.Error?.Message;
      }
    }

    throw new Error(`Failed to upload to AWS: ${message}`);
  }

  /**
   * Retrieves the URL for uploading an icon (logo) to the specified LogoType.
   *
   * @param {LogoType} logo - The LogoType for which the upload URL is requested.
   * @return {Promise<UrlResponse>} A promise that resolves to the URLResponse containing the upload URL and fields.
   * @throws {Error} If the upload URL retrieval fails or encounters an error.
   */
  protected async _getIconUploadUrl(logo: LogoType): Promise<UrlResponse> {
    const resp = await this.sendGetRequest<UrlResponse[]>(
      `${this.config.meetingsHost}/v1/meetings/themes/logos-upload-urls`,
    );

    const matchingUrl = (resp.data || []).filter(
      ({ fields }) => fields.logoType === logo,
    );

    if (!matchingUrl) {
      throw new Error(`Cannot find url to upload ${logo}`);
    }

    return matchingUrl[0];
  }
}
