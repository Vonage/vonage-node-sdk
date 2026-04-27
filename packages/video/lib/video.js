import { tokenGenerate } from '@vonage/jwt';
import { AuthenticationType, Client } from '@vonage/server-client';
import { MediaMode } from './enums';
import {

  ArchiveMode } from

'./types';

/**
 * Video Client for managing and interacting with video-related operations in your application.
 * This client allows you to control sessions, streams, archives, broadcasts, and various video-related features.
 *
 * Usage:
 * - Create and manage video sessions with customizable settings.
 * - Control video streams, including muting, adding, and removing streams.
 * - Initiate SIP calls and establish WebSockets for real-time communication.
 * - Enable and disable captions for improved accessibility.
 * - Start, stop, and manage video archives and broadcasts.
 * - Render experiences and access detailed information about streams and archives.
 * - Generate client tokens for secure session connections.
 * - Perform various video-related operations with ease.
 *
 * @remarks
 * The Video Client is designed to simplify video management tasks within your application.
 * It provides a comprehensive set of methods and options to configure and control video interactions seamlessly.
 *
 * @example
 * Create a standalone Video client
 *
 * ```ts
 * import { Video } from '@vonage/video';
 *
 * const videoClient = new Video({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Video client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const videoClient = vonage.video;
 * ```
 */
export class Video extends Client {
  authType = AuthenticationType.JWT;

  /**
   * Adds a stream to an existing archive, allowing you to include additional streams in the archive recording.
   *
   * @param {string} archiveId - The ID of the archive to which you want to add a stream.
   * @param {string} streamId - The ID of the stream you want to add to the archive.
   * @param {boolean} [audio=true] - Whether to include audio from the added stream (default: true).
   * @param {boolean} [video=true] - Whether to include video from the added stream (default: true).
   * @return {Promise<void>} A promise that resolves when the stream has been successfully added to the archive.
   * @throws {Error} If an error occurs while adding the stream to the archive.
   *
   * @example
   * ```ts
   * await videoClient.addArchiveStream(ARCHIVE_ID, STREAM_ID);
   * ```
   */
  async addArchiveStream(
  archiveId,
  streamId,
  audio = true,
  video = true)
  {
    const data = {
      addStream: streamId,
      hasAudio: audio,
      hasVideo: video
    };

    await this.sendPatchRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}/streams`,
      data
    );
  }

  /**
   * Adds a stream to an existing broadcast, allowing you to include additional streams in the live broadcast.
   *
   * @param {string} broadcastId - The ID of the broadcast to which you want to add a stream.
   * @param {string} streamId - The ID of the stream you want to add to the broadcast.
   * @return {Promise<void>} A promise that resolves when the stream has been successfully added to the broadcast.
   * @throws {Error} If an error occurs while adding the stream to the broadcast.
   *
   * @example
   * ```ts
   * await videoClient.addStreamToBroadcast(BROADCAST_ID, STREAM_ID);
   * ```
   */
  async addStreamToBroadcast(
  broadcastId,
  streamId)
  {
    await this.updateBroadcast({ broadcastId, addStream: streamId });
  }

  /**
   * Connects to a WebSocket for a specified session using the provided client token and WebSocket configuration.
   *
   * @param {string} sessionId - The ID of the session to which you want to connect via WebSocket.
   * @param {string} clientToken - The client token generated for authentication.
   * @param {WebSocketConfig} config - The WebSocket configuration specifying the URI and optional parameters.
   * @return {Promise<WebSocketConnectResponse>} A promise that resolves with WebSocket connection details upon successful connection.
   * @throws {Error} If an error occurs during the WebSocket connection process.
   *
   * @example
   * ```ts
   * const result = await videoClient.connectToWebsocket(
   *   SESSION_ID,
   *   CLIENT_TOKEN,
   *   {
   *     uri: 'wss://example.com',
   *   },
   * )
   *
   * console.log(result.id);
   * ```
   */
  async connectToWebsocket(
  sessionId,
  clientToken,
  config)
  {
    const data = {
      sessionId,
      token: clientToken,
      websocket: config
    };

    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/connect`,
      data
    );
    return resp.data;
  }

  /**
   * Creates a new session with the specified options.
   *
   * @param {Object} [sessionOptions] - Optional session configuration options.
   * @param {ArchiveMode} [sessionOptions.archiveMode=ArchiveMode.MANUAL] - The archive mode for the session.
   * @param {MediaMode} [sessionOptions.mediaMode=MediaMode.ROUTED] - The media mode for the session.
   * @param {string} [sessionOptions.location] - The location for the session.
   * @return {Promise<Session>} A promise that resolves with details of the newly created session.
   * @throws {Error} If an error occurs during the session creation process.
   *
   * @example
   * Create a session with default options
   * ```ts
   * const session = await videoClient.createSession({});
   * console.log(session.sessionId);
   * ```
   *
   * @example
   * Create a session with archive mode set to manual
   * ```ts
   * import { ArchiveMode } from '@vonage/video';
   *
   * const session = await videoClient.createSession({
   *   archiveMode: ArchiveMode.MANUAL,
   * });
   * console.log(session.sessionId);
   * ```
   *
   * @example
   * Create a session with location set to a specific region
   * ```ts
   * const session = await videoClient.createSession({
   *   location: 'eu',
   * });
   * console.log(session.sessionId);
   * ```
   *
   * @example
   * Create a session with media mode set to routed
   * ```ts
   * import { MediaMode } from '@vonage/video';
   *
   * const session = await videoClient.createSession({
   *   mediaMode: MediaMode.ROUTED,
   * });
   * console.log(session.sessionId);
   * ```
   */
  async createSession(sessionOptions)

  {
    const data = {
      archiveMode: sessionOptions?.archiveMode ?? ArchiveMode.MANUAL,
      'p2p.preference': sessionOptions?.mediaMode ?? MediaMode.ROUTED,
      location: sessionOptions?.location ?? null
    };

    const resp = await this.sendFormSubmitRequest(
      `${this.config.videoHost}/session/create`,
      data
    );

    return {
      sessionId: resp.data[0].session_id,
      archiveMode: data.archiveMode,
      mediaMode: data['p2p.preference'],
      location: data.location
    };
  }

  /**
   * Deletes an archive with the specified archive ID.
   *
   * @param {string} archiveId - The ID of the archive to delete.
   * @return {Promise<void>} A promise that resolves when the archive is successfully deleted.
   * @throws {Error} If an error occurs while deleting the archive or if the archive with the given ID does not exist.
   *
   * @example
   * ```ts
   * await videoClient.deleteArchive(ARCHIVE_ID);
   * ```
   */
  async deleteArchive(archiveId) {
    await this.sendDeleteRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}`
    );
  }

  /**
   * Disables captions for a specific caption ID.
   *
   * @param {string} captionId - The ID of the caption to disable.
   * @return {Promise<void>} A promise that resolves when the captions are successfully disabled.
   * @throws {Error} If an error occurs while disabling captions or if the caption with the given ID does not exist.
   *
   * @example
   * ```ts
   * await videoClient.disableCaptions(CAPTION_ID);
   * ```
   */
  async disableCaptions(captionId) {
    await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/captions/${captionId}/stop`
    );
  }

  /**
   * Disables force mute for a session, allowing audio for all streams.
   *
   * @param {string} sessionId - The ID of the session for which to disable force mute.
   * @param {string[]} excludedStreamIds - An optional array of stream IDs to exclude from the force mute operation.
   * @return {Promise<void>} A promise that resolves when the force mute is successfully disabled for the session.
   * @throws {Error} If an error occurs while disabling force mute or if the session with the given ID does not exist.
   *
   * @example
   * ```ts
   * const forceMute = await videoClient.disableForceMute(SESSION_ID);
   * console.log(forceMute.status);
   * ```
   */
  async disableForceMute(
  sessionId,
  excludedStreamIds = [])
  {
    return this.muteAllStreams(sessionId, false, excludedStreamIds);
  }

  /**
   * Disconnects a client from a session.
   *
   * @param {string} sessionId - The ID of the session from which to disconnect the client.
   * @param {string} connectionId - The ID of the client's connection to disconnect.
   * @return {Promise<void>} A promise that resolves when the client is successfully disconnected from the session.
   * @throws {Error} If an error occurs while disconnecting the client or if the session or connection with the given IDs do not exist.
   *
   * @example
   * ```ts
   * await videoClient.disconnectClient(SESSION_ID, CONNECTION_ID);
   * ```
   */
  async disconnectClient(
  sessionId,
  connectionId)
  {
    await this.sendDeleteRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/connection/${connectionId}`
    );
  }

  /**
   * Disconnects a WebSocket connection associated with a call or session.
   *
   * @deprecated Use disconnectClient() instead, as this endpoint no longer works
   * @param {string} callId - The ID of the call or session to which the WebSocket connection is associated.
   * @return {Promise<void>} A promise that resolves when the WebSocket connection is successfully disconnected.
   * @throws {Error} If an error occurs while disconnecting the WebSocket connection or if the call or session with the given ID does not exist.
   *
   * @example
   * ```ts
   * await videoClient.disconnectWebsocket(CALL_ID);
   * ```
   */
  async disconnectWebsocket(callId) {
    await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/connect/${callId}/stop`
    );
  }

  /**
   * Enables captions for a session using the specified client token and caption options.
   *
   * @param {string} sessionId - The ID of the session to enable captions for.
   * @param {string} clientToken - The client token associated with the session, used for authentication.
   * @param {CaptionOptions} [captionOptions] - Optional caption options to configure caption behavior.
   * @return {Promise<EnableCaptionResponse>} A promise that resolves with an `EnableCaptionResponse` containing information about the enabled captions.
   * @throws {Error} If an error occurs while enabling captions or if the session with the given ID does not exist.
   *
   * @example
   * ```ts
   * const result = await videoClient.enableCaptions(SESSION_ID, CLIENT_TOKEN);
   * console.log(result.captionId);
   * ```
   */
  async enableCaptions(
  sessionId,
  clientToken,
  captionOptions = {})
  {
    const data = Object.assign(
      {},
      { sessionId, token: clientToken },
      captionOptions
    );
    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/captions`,
      data
    );
    return resp.data;
  }

  /**
   * Forces muting of all streams in a session, except those specified in the `excludedStreamIds` array.
   *
   * @param {string} sessionId - The ID of the session in which to force mute streams.
   * @param {string[]} [excludedStreamIds] - An optional array of stream IDs to exclude from muting.
   * @return {Promise<ProjectDetailsResponse>} A promise that resolves with a `ProjectDetailsResponse` containing updated session details after muting.
   * @throws {Error} If an error occurs while muting the streams or if the session with the given ID does not exist.
   *
   * @example
   * ```ts
   * const forceMute = await videoClient.forceMuteAll(SESSION_ID);
   * console.log(forceMute.status);
   * ```
   */
  async forceMuteAll(
  sessionId,
  excludedStreamIds = [])
  {
    return this.muteAllStreams(sessionId, true, excludedStreamIds);
  }

  /**
   * Generates a client token for connecting to a session with the specified options.
   *
   * @param {string} sessionId - The ID of the session to generate the client token for.
   * @param {ClientTokenOptions} [tokenOptions] - Optional token options including role, data, and expiration time.
   * @return {string} A client token that can be used for authentication when connecting to a session.
   *
   * @example
   * ```ts
   * const token = videoClient.generateClientToken(SESSION_ID);
   * console.log(`The token is ${token}`);
   * ```
   */
  generateClientToken(
  sessionId,
  tokenOptions)
  {
    const now = Math.round(new Date().getTime() / 1000);
    const claims = {
      scope: 'session.connect',
      session_id: sessionId,
      role: 'publisher',
      initial_layout_class_list: '',
      exp: tokenOptions?.expireTime || now + 86400,
      sub: 'video',
      acl: {
        paths: {
          '/session/**': {}
        }
      }
    };

    if (tokenOptions?.role) {
      claims.role = tokenOptions.role;
    }
    if (tokenOptions?.data) {
      claims.connection_data = tokenOptions.data;
    }
    if (tokenOptions?.initialLayoutClassList) {
      claims.initial_layout_class_list =
      tokenOptions.initialLayoutClassList.join(' ');
    }

    return tokenGenerate(
      this.auth.applicationId,
      this.auth.privateKey,
      claims
    );
  }

  /**
   * Retrieves information about a specific archive by its ID.
   *
   * @param {string} archiveId - The ID of the archive to retrieve.
   * @return {Promise<SingleArchiveResponse>} A promise that resolves to the details of the requested archive.
   *
   * @example
   * ```ts
   * const archive = await videoClient.getArchive(ARCHIVE_ID);
   * console.log(archive.createdAt);
   * ```
   */
  async getArchive(
  archiveId)
  {
    const resp = await this.sendGetRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}`
    );
    return resp.data;
  }

  /**
   * Retrieves information about a specific broadcast by its ID.
   *
   * @param {string} broadcastId - The ID of the broadcast to retrieve.
   * @return {Promise<BroadcastDetailsResponse>} A promise that resolves to the details of the requested broadcast.
   *
   * ```ts
   * const broadcast = await videoClient.getBroadcast(BROADCAST_ID);
   * console.log(broadcast.createdAt);
   * ```
   */
  async getBroadcast(
  broadcastId)
  {
    const resp = await this.sendGetRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/${broadcastId}`
    );
    return resp.data;
  }

  /**
   * Retrieves the status of a caption by its ID.
   *
   * @param {string} captionId - The ID of the caption to retrieve the status for.
   * @return {Promise<CaptionStatusResponse>} A promise that resolves to the status of the requested caption.
   * @deprecated This method no longer works and was added incorrectly
   *
   * @example
   * ```ts
   * const captionStatus = await videoClient.getCaptionStatus(CAPTION_ID);
   * console.log(captionStatus.status);
   * ```
   */
  async getCaptionStatus(
  captionId)
  {
    const resp = await this.sendGetRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/captions/${captionId}`
    );
    return resp.data;
  }

  /**
   * Retrieves the details of an Experience Composer render by its ID.
   *
   * @param {string} renderId - The ID of the Experience Composer render to retrieve.
   * @return {Promise<ExperienceComposerResponse>} A promise that resolves to the details of the requested Experience Composer render.
   *
   * @example
   * ```ts
   * const render = await videoClient.getExperienceComposerRender(RENDER_ID);
   * console.log(render.createdAt);
   * ```
   */
  async getExperienceComposerRender(
  renderId)
  {
    const resp = await this.sendGetRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/render/${renderId}`
    );
    return resp.data;
  }

  /**
   * Retrieves information about one or more streams in a session.
   *
   * @param {string} sessionId - The ID of the session to retrieve stream information from.
   * @param {string | undefined} [streamId] - Optional. The ID of a specific stream to retrieve information for.
   * @return {Promise<MultiStreamLayoutResponse | SingleStreamLayoutResponse>} A promise that resolves to stream information. If a specific `streamId` is provided, it resolves to a single stream's information (SingleStreamLayoutResponse), otherwise, it resolves to multiple streams' information (MultiStreamLayoutResponse).
   *
   * @example
   * ```ts
   * const streamInfo = await videoClient.getStreamInfo(SESSION_ID);
   *
   * if (streamInfo.items) {
   *   streamInfo.items.forEach((item) => {
   *     console.log(item.id);
   *   });
   * } else {
   *  console.log(streamInfo.id);
   * }
   * ```
   */
  async getStreamInfo(
  sessionId,
  streamId)
  {
    let url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/stream`;
    if (streamId) {
      url = url + `/${streamId}`;
    }

    let resp;

    if (streamId) {
      resp = await this.sendGetRequest(url);
    } else {
      resp = await this.sendGetRequest(url);
    }

    return resp.data;
  }

  stripBlankValues(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.stripBlankValues(obj[key]);
      } else if (obj[key] === '') {
        delete obj[key];
      }
    }
    return obj;
  }

  /**
   * Initiates a SIP call within a session.
   *
   * @param {string} sessionId - The ID of the session in which to initiate the SIP call.
   * @param {SIPCallOptions} options - The options for initiating the SIP call.
   * @return {Promise<SIPCallResponse>} A promise that resolves to the SIP call response, including the call ID and other details.
   *
   * @example
   * Start a SIP call with default options
   * ```ts
   * const sipCall = await videoClient.initiateSIPCal(SESSION_ID);
   * console.log(sipCall.id);
   * ```
   *
   * @example
   * Start a SIP call with custom options
   * ```ts
   * const sipCall = await videoClient.initiateSIPCall(
   *   SESSION_ID,
   *   {
   *     uri: 'sip://example.com',
   *   }
   * );
   * console.log(sipCall.id);
   * ```
   */
  async initiateSIPCall(
  sessionId,
  options)
  {
    let data = Object.assign(
      {},
      { sessionId },
      options
    );
    const url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/dial`;

    // Fixes a bug found during integration
    // where blank values are treated differently than null values
    data = this.stripBlankValues(data);

    const resp = await this.sendPostRequest(url, data);
    return resp.data;
  }

  /**
   * This addresses a mis-spelling in the function name.
   * @deprecated Please update to use initiateSIPCall instead
   */
  async intiateSIPCall(
  sessionId,
  options)
  {
    return this.initiateSIPCall(sessionId, options);
  }

  /**
   * Lists Experience Composer renders based on the specified filter criteria.
   *
   * @param {ExperienceComposerListFilter} filter - An optional filter to apply when listing Experience Composer renders.
   * @return {Promise<MultiExperienceComposerResponse>} A promise that resolves to a list of Experience Composer renders matching the filter criteria.
   *
   * @example
   * ```ts
   * const renders = await videoClient.listExperienceComposerRenders();
   * for (const render of renders.items) {
   *   console.log(render.id);
   * }
   * ```
   */
  async listExperienceComposerRenders(
  filter)
  {
    const resp = await this.sendGetRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/render`,
      filter
    );
    return resp.data;
  }

  /**
   * Mutes or unmutes all streams in a session, optionally excluding specific stream IDs from muting.
   *
   * @param {string} sessionId - The ID of the session in which to mute or unmute streams.
   * @param {boolean} active - `true` to mute all streams, `false` to unmute all streams.
   * @param {string[]} excludedStreamIds - An optional array of stream IDs to exclude from muting/unmuting.
   * @return {Promise<ProjectDetailsResponse>} A promise that resolves to the updated session details.
   *
   * @example
   * ```ts
   * const forceMute = await videoClient.muteAll(SESSION_ID);
   * console.log(forceMute.status);
   * ```
   */
  async muteAllStreams(
  sessionId,
  active,
  excludedStreamIds = [])
  {
    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/mute`,
      {
        active,
        excludedStreamIds
      }
    );
    return resp.data;
  }

  /**
   * Mutes or unmutes a specific stream in a session.
   *
   * @param {string} sessionId - The ID of the session containing the stream.
   * @param {string} streamId - The ID of the stream to mute or unmute.
   * @return {Promise<ProjectDetailsResponse>} A promise that resolves to the updated session details.
   *
   * @example
   * ```ts
   * const forceMute = await videoClient.muteStream(SESSION_ID, STREAM_ID);
   * console.log(forceMute.status);
   * ```
   */
  async muteStream(
  sessionId,
  streamId)
  {
    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/stream/${streamId}/mute`
    );
    return resp.data;
  }

  /**
   * Sends DTMF (Dual-Tone Multi-Frequency) tones to a specific session or connection.
   *
   * @param {string} sessionId - The ID of the session to send DTMF tones to.
   * @param {string} digits - The DTMF tones to play.
   * @param {string} [connectionId] - Optional. The ID of the connection within the session to send DTMF tones to.
   * @return {Promise<void>} A promise that resolves when the DTMF tones have been played.
   *
   * @example
   * ```ts
   * await videoClient.playDTMF(SESSION_ID, '1234');
   * ```
   */
  async playDTMF(
  sessionId,
  digits,
  connectionId)
  {
    let url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/play-dtmf`;
    if (connectionId) {
      url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/connection/${connectionId}/play-dtmf`;
    }

    await this.sendPostRequest(url, { digits });
  }

  /**
   * Removes a stream from an archive.
   *
   * @param {string} archiveId - The ID of the archive from which to remove the stream.
   * @param {string} streamId - The ID of the stream to remove from the archive.
   * @return {Promise<void>} A promise that resolves when the stream has been successfully removed from the archive.
   *
   * @example
   * ```ts
   * await videoClient.removeArchiveStream(ARCHIVE_ID, STREAM_ID);
   * ```
   */
  async removeArchiveStream(
  archiveId,
  streamId)
  {
    await this.sendPatchRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}/streams`,
      { removeStream: streamId }
    );
  }

  /**
   * Removes a stream from a broadcast.
   *
   * @param {string} broadcastId - The ID of the broadcast from which to remove the stream.
   * @param {string} streamId - The ID of the stream to remove from the broadcast.
   * @return {Promise<void>} A promise that resolves when the stream has been successfully removed from the broadcast.
   *
   * @example
   * ```ts
   * await videoClient.removeStreamFromBroadcast(BROADCAST_ID, STREAM_ID);
   * ```
   */
  async removeStreamFromBroadcast(
  broadcastId,
  streamId)
  {
    await this.updateBroadcast({ broadcastId, removeStream: streamId });
  }

  /**
   * Searches for archives based on the specified filter criteria.
   *
   * @param {ArchiveSearchFilter} [filter] - Optional filter criteria to narrow down the search.
   * @return {Promise<MultiArchiveResponse>} A promise that resolves with the search results, including multiple archive items.
   *
   * @example
   * ```ts
   * const archives = await videoClient.searchArchives();
   * for (const archive of archives.items) {
   *   console.log(archive.id);
   * }
   * ```
   * @example
   * Search for archives for a session
   * ```ts
   * const archives = await videoClient.searchArchives({
   *   sessionId: SESSION_ID,
   * });
   *
   * for (const archive of archives.items) {
   *   console.log(archive.id);
   * }
   * ```
   */
  async searchArchives(
  filter)
  {
    const resp = await this.sendGetRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive`,
      filter
    );
    return resp.data;
  }

  /**
   * Searches for broadcasts based on the specified filter criteria.
   *
   * @param {BroadcastSearchFilter} [filter] - Optional filter criteria to narrow down the search.
   * @return {Promise<MultiBroadcastResponse>} A promise that resolves with the search results, including multiple broadcast items.
   *
   * @example
   * ```ts
   * const broadcasts = await videoClient.searchBroadcasts();
   * for (const broadcast of broadcasts.items) {
   *    console.log(broadcast.id);
   * }
   * ```
   *
   * @example
   * Get braodcasts for a session
   * ```ts
   * const broadcasts = await videoClient.searchBroadcasts({
   *   sessionId: SESSION_ID,
   * })
   * for (const broadcast of broadcasts.items) {
   *   console.log(broadcast.id);
   *  }
   *  ```
   */
  async searchBroadcasts(
  filter)
  {
    const resp = await this.sendGetRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/`,
      filter
    );
    return resp.data;
  }

  /**
   * Sends a signal to a session or a specific connection within a session.
   *
   * @param {Signal} signal - The signal to send, including a type and data.
   * @param {string} sessionId - The ID of the session to which the signal will be sent.
   * @param {string} [connectionId] - Optional. The ID of the connection within the session to which the signal will be sent. If not provided, the signal will be sent to the entire session.
   * @return {Promise<void>} A promise that resolves when the signal is successfully sent.
   *
   * @example
   * await videoClient.sendSignal(
   *   {
   *     type: 'text',
   *     data: 'Hello world!',
   *   },
   *   SESSION_ID,
   * );
   * ```
   */
  async sendSignal(
  signal,
  sessionId,
  connectionId)
  {
    let url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/signal`;
    if (connectionId) {
      url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/connection/${connectionId}/signal`;
    }

    await this.sendPostRequest(url, signal);
  }

  /**
   * Sets the stream class lists for one or more streams within a session.
   *
   * @param {string} sessionId - The ID of the session for which stream class lists will be set.
   * @param {StreamClassList[]} settings - An array of objects specifying the stream ID and corresponding class lists to be set.
   * @return {Promise<void>} A promise that resolves when the stream class lists are successfully set.
   *
   * @example
   *
   * ```ts
   * await videoClient.setStreamClassLists(
   *   SESSION_ID,
   *   [
   *     {
   *       id: STREAM_ID,
   *       layoutClassList: ['full'],
   *     }
   *   ]
   * )
   * ```
   */
  async setStreamClassLists(
  sessionId,
  settings)
  {
    await this.sendPutRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/stream`,
      { items: settings }
    );
  }

  /**
   * Starts an archive for a given session with optional configuration.
   *
   * @param {string} sessionId - The ID of the session to archive.
   * @param {ArchiveOptions} [options] - Optional configuration for the archive, such as audio/video settings, layout, and more.
   * @return {Promise<SingleArchiveResponse>} A promise that resolves with information about the started archive.
   *
   * @example
   * ```ts
   * const archive = await videoClient.startArchive(SESSION_ID);
   * console.log(archive.id);
   * ```
   */
  async startArchive(
  sessionId,
  options)
  {
    const data = Object.assign({}, { sessionId }, options);

    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive`,
      data
    );
    return resp.data;
  }

  /**
   * Starts a broadcast for a given session with the specified configuration.
   *
   * @param {string} sessionId - The ID of the session to start broadcasting.
   * @param {BroadcastConfig} config - Configuration for the broadcast, including stream settings, layout, and more.
   * @return {Promise<BroadcastDetailsResponse>} A promise that resolves with information about the started broadcast.
   *
   * @example
   * ```ts
   * const broadcast = await videoClient.startBroadcast(
   *   SESSION_ID,
   *   {
   *     outputs: {
   *       hls: {
   *         lowLatency: true,
   *       }
   *       rtmp: [{
   *         serverUrl: 'rtmp://example.com',
   *       }],
   *     }
   *   }
   * );
   * ```
   */
  async startBroadcast(
  sessionId,
  config)
  {
    const data = Object.assign({}, { sessionId }, config);
    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/`,
      data
    );
    return resp.data;
  }

  /**
   * Starts rendering an experience composer with the provided configuration.
   *
   * @param {string} sessionId - The ID of the session associated with the experience composer.
   * @param {string} token - The client token for authentication.
   * @param {ExperienceComposerOptions} config - Configuration options for the experience composer rendering.
   * @return {Promise<ExperienceComposerResponse>} A promise that resolves with information about the started experience composer rendering.
   *
   * @example
   * ```ts
   *
   * const render = await videoClient.startExperienceComposerRender(
   *   SESSION_ID,
   *   token,
   * )
   *
   * console.log(render.id);
   * ```
   */
  async startExperienceComposerRender(
  sessionId,
  token,
  config)
  {
    const data = Object.assign({}, { sessionId, token }, config);
    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/render`,
      data
    );
    return resp.data;
  }

  /**
   * Stops an archive with the given archive ID.
   *
   * @param {string} archiveId - The ID of the archive to stop.
   * @return {Promise<SingleArchiveResponse>} A promise that resolves with information about the stopped archive.
   *
   * @example
   * ```ts
   * const archive = await videoClient.stopArchive(ARCHIVE_ID);
   *
   * console.log(archive.status);
   * ```
   */
  async stopArchive(archiveId) {
    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}/stop`
    );
    return resp.data;
  }

  /**
   * Stops a broadcast with the given broadcast ID.
   *
   * @param {string} broadcastId - The ID of the broadcast to stop.
   * @return {Promise<BroadcastDetailsResponse>} A promise that resolves with information about the stopped broadcast.
   *
   * @example
   * ```ts
   * const broadcast = await videoClient.stopBroadcast(BROADCAST_ID);
   * console.log(broadcast.status);
   * ```
   */
  async stopBroadcast(
  broadcastId)
  {
    const resp = await this.sendPostRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/${broadcastId}/stop`
    );
    return resp.data;
  }

  /**
   * Stops an Experience Composer render with the given render ID.
   *
   * @param {string} renderId - The ID of the Experience Composer render to stop.
   * @return {Promise<void>} A promise that resolves when the render is successfully stopped.
   *
   * @example
   * ```ts
   * await videoClient.stopExperienceComposerRender(RENDER_ID);
   * ```
   */
  async stopExperienceComposerRender(renderId) {
    await this.sendDeleteRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/render/${renderId}`
    );
  }

  /**
   * Updates the layout of an archive with the given archive ID.
   *
   * @param {string} archiveId - The ID of the archive to update the layout for.
   * @param {ArchiveLayout} layout - The new layout configuration to set for the archive.
   * @return {Promise<void>} A promise that resolves when the layout is successfully updated.
   *
   * @example
   * ```ts
   * await videoClient.updateArchiveLayout(
   * ```
   */
  async updateArchiveLayout(
  archiveId,
  layout)
  {
    await this.sendPutRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}/layout`,
      layout
    );
  }

  /**
   * Updates the configuration of a broadcast with the given broadcast ID.
   *
   * @param {BroadcastUpdateConfig} config - The configuration options to update the broadcast.
   * @return {Promise<void>} A promise that resolves when the broadcast is successfully updated.
   *
   * @example
   * ```ts
   *
   * await videoClient.updateBroadcast({
   *   broadcastId: BROADCAST_ID,
   *   hasAudio: true,
   * })
   * ```
   */
  async updateBroadcast(config) {
    await this.sendPatchRequest(
      `${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/${config.broadcastId}/streams`,
      config
    );
  }
}
