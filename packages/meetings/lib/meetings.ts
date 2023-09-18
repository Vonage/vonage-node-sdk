import { XMLParser } from 'fast-xml-parser';
import FormData from 'form-data';
import { AuthenticationType, Client } from '@vonage/server-client';
import { VetchError, HTTPMethods } from '@vonage/vetch';
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
} from './types/index';
import { LogoType } from './enums';
import { existsSync, readFileSync } from 'fs';

const apiRoomToSdk = (room: MeetingRoomResponse): MeetingRoom => {
  const sdkRoom = {
    ...Client.transformers.camelCaseObjectKeys(room, true),
    hostUrl: room._links?.host_url?.href,
    guestUrl: room?._links?.guest_url?.href,
  };
  delete sdkRoom.links;
  return sdkRoom;
};

const apiRecordingToSdk = (recording: RecordingResponse): Recording => ({
  ...Client.transformers.camelCaseObjectKeys(recording),
  url: recording?._links?.url?.href,
});

export class Meetings extends Client {
  protected authType = AuthenticationType.JWT;
  public FORM_BOUNDARY = '-------------------------Vonage-Node_SDK';

  public ROOM_WRITE_KEYS = [
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

  public THEME_WRITE_KEYS = [
    'theme_name',
    'main_color',
    'brand_text',
    'short_company_url',
  ];

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

  async getRoomPage(
    params: MeetingRoomParams = {},
  ): Promise<MeetingRoomPageResponse> {
    const resp = await this.sendGetRequest<MeetingRoomPageResponse>(
      `${this.config.meetingsHost}/v1/meetings/rooms`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data;
  }

  async getRoom(roomId: string): Promise<MeetingRoom> {
    const resp = await this.sendGetRequest<MeetingRoomResponse>(
      `${this.config.meetingsHost}/v1/meetings/rooms/${roomId}`,
    );

    return apiRoomToSdk(resp.data);
  }

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

  async getRecording(recordingId: string): Promise<Recording> {
    const resp = await this.sendGetRequest<RecordingResponse>(
      `${this.config.meetingsHost}/v1/meetings/recordings/${recordingId}`,
    );

    return apiRecordingToSdk(resp.data);
  }

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

  async deleteRecording(recordingId: string): Promise<void> {
    await this.sendDeleteRequest(
      `${this.config.meetingsHost}/v1/meetings/recordings/${recordingId}`,
    );
  }

  async *getDialInNumbers(): AsyncGenerator<
    DialInNumber,
    void & DialInNumber,
    undefined
    > {
    const resp = await this.sendGetRequest<DialInNumber[]>(
      `${this.config.meetingsHost}/v1/meetings/dial-in-numbers`,
    );

    const numbers = (resp.data || []).map((number) =>
      Client.transformers.camelCaseObjectKeys(number, false),
    );

    yield* numbers;
  }

  async *getThemes(): AsyncGenerator<Theme, void & Theme, undefined> {
    const resp = await this.sendGetRequest<ThemeResponse[]>(
      `${this.config.meetingsHost}/v1/meetings/themes`,
    );

    const themes = (resp.data || []).map((theme) =>
      Client.transformers.camelCaseObjectKeys(theme, false),
    );

    yield* themes;
  }

  async getTheme(themeId: string): Promise<Theme> {
    const resp = await this.sendGetRequest<ThemeResponse>(
      `${this.config.meetingsHost}/v1/meetings/themes/${themeId}`,
    );

    return Client.transformers.camelCaseObjectKeys(resp.data);
  }

  async deleteTheme(themeId: string, force = false): Promise<void> {
    await this.sendRequest({
      url: `${this.config.meetingsHost}/v1/meetings/themes/${themeId}`,
      params: force ? { force: true } : null,
      method: HTTPMethods.DELETE,
    });
  }

  async createTheme(theme: Theme): Promise<Theme> {
    const resp = await this.sendPostRequest<ThemeResponse>(
      `${this.config.meetingsHost}/v1/meetings/themes`,
      pick(
        Client.transformers.snakeCaseObjectKeys(theme, true),
        this.THEME_WRITE_KEYS,
      ),
    );

    return Client.transformers.camelCaseObjectKeys(resp.data);
  }

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

    return Client.transformers.camelCaseObjectKeys(resp.data);
  }

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

    let error;
    try {
      await this.sendPutRequest<ThemeResponse>(
        `${this.config.meetingsHost}/v1/meetings/themes/${themeId}/finalizeLogos`,
        {
          keys: [urlResponse.fields.key],
        },
      );

      return true;
    } catch (apiError: unknown | VetchError) {
      error = apiError;
    }

    const errors = error?.response?.data?.errors || [];
    const message = errors[0]?.code || 'FATAL ERROR';
    throw new Error(`Could not attach image to theme: ${message}`);
  }

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

    let error;
    try {
      await this.sendRequest({
        url: url,
        body: awsForm,
        method: HTTPMethods.POST,
      });
      return true;
    } catch (apiError: unknown | VetchError) {
      error = apiError;
    }

    const errorResponse = error?.response?.data;
    const parser = new XMLParser();
    const output = parser.parse(errorResponse);
    throw new Error(`Failed to upload to AWS: ${output?.Error?.Message}`);
  }

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
