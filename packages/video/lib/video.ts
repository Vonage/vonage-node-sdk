import { tokenGenerate } from '@vonage/jwt';
import { VideoResponse } from './interfaces/VideoResponse';
import { MultiStreamLayoutResponse } from './interfaces/Response/MultiStreamLayoutResponse';
import { SingleStreamLayoutResponse } from './interfaces/Response/SingleStreamLayoutResponse';
import { ProjectDetailsResponse } from './interfaces/Response/ProjectDetailsResponse';
import { ArchiveOptions } from './interfaces/ArchiveOptions';
import { SingleArchiveResponse } from './interfaces/Response/SingleArchiveResponse';
import { MultiArchiveResponse } from './interfaces/Response/MultiArchiveResponse';
import { ArchiveSearchFilter } from './interfaces/ArchiveSearchFilter';
import { ArchiveLayout } from './interfaces/ArchiveLayout';
import { MediaMode } from './interfaces/MediaMode';
import { ArchiveMode } from './interfaces/ArchiveMode';
import { Session } from './interfaces/Session';
import { StreamClassList } from './interfaces/StreamClassList';
import { ClientTokenOptions } from './interfaces/ClientTokenOptions';
import { AuthenticationType, Client } from '@vonage/server-client';
import { BroadcastConfig } from './interfaces/BroadcastConfig';
import { BroadcastDetailsResponse } from './interfaces/Response/BroadcastDetailsResponse';
import { BroadcastSearchFilter } from './interfaces/BroadcastSearchFilter';
import { MultiBroadcastResponse } from './interfaces/Response/MultiBroadcastResponse';
import { BroadcastUpdateConfig } from './interfaces/BroadcastUpdateConfig';

export class Video extends Client {
  protected authType = AuthenticationType.JWT;

  public async addArchiveStream(archiveId: string, streamId: string, audio: boolean = true, video: boolean = true): Promise<void> {
    const data = {
      addStream: streamId,
      hasAudio: audio,
      hasVideo: video,
    };

    await this.sendPatchRequest<void>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}/stream`, data);
  }

  public async addStreamToBroadcast(broadcastId: string, streamId: string): Promise<void> {
    await this.updateBroadcast({ broadcastId, addStream: streamId });
  }

  public async createSession(sessionOptions?: { archiveMode?: ArchiveMode; location?: string; mediaMode?: MediaMode }): Promise<Session> {
    const data = {
      archiveMode: sessionOptions?.archiveMode ?? ArchiveMode.MANUAL,
      'p2p.preference': sessionOptions?.mediaMode ?? MediaMode.ROUTED,
      location: sessionOptions?.location ?? null,
    };

    const resp = await this.sendFormSubmitRequest(`${this.config.videoHost}/session/create`, data);

    return {
      sessionId: resp.data[0].session_id,
      archiveMode: data.archiveMode,
      mediaMode: data['p2p.preference'],
      location: data.location,
    };
  }

  public async deleteArchive(archiveId: string): Promise<void> {
    await this.sendDeleteRequest<void>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}`);
  }

  public async disableForceMute(sessionId: string, excludedStreamIds: string[] = []) {
    return this.muteAllStreams(sessionId, false, excludedStreamIds);
  }

  public async disconnectClient(sessionId: string, connectionId: string): Promise<void> {
    await this.sendDeleteRequest<void>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/connection/${connectionId}`);
  }

  public async forceMuteAll(sessionId: string, excludedStreamIds: string[] = []) {
    return this.muteAllStreams(sessionId, true, excludedStreamIds);
  }

  public generateClientToken(sessionId: string, tokenOptions?: ClientTokenOptions) {
    const now = Math.round(new Date().getTime() / 1000);
    const claims: any = {
      scope: 'session.connect',
      session_id: sessionId,
      role: 'publisher',
      initial_layout_class_list: '',
    };

    if (tokenOptions?.role) {
      claims.role = tokenOptions.role;
    }
    if (tokenOptions?.data) {
      claims.connection_data = tokenOptions.data;
    }
    if (tokenOptions?.initialLayoutClassList) {
      claims.initial_layout_class_list = tokenOptions.initialLayoutClassList.join(' ');
    }
    if (tokenOptions?.expireTime && tokenOptions.expireTime > now) {
      claims.exp = tokenOptions.expireTime;
    }

    return tokenGenerate(this.auth.applicationId, this.auth.privateKey, claims);
  }

  public async getArchive(archiveId: string): Promise<SingleArchiveResponse> {
    const resp = await this.sendGetRequest<SingleArchiveResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}`);
    return resp.data;
  }

  public async getBroadcast(broadcastId: string): Promise<BroadcastDetailsResponse> {
    const resp = await this.sendGetRequest<BroadcastDetailsResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/${broadcastId}`);
    return resp.data;
  }

  public async getStreamInfo(sessionId: string, streamId?: string): Promise<MultiStreamLayoutResponse | SingleStreamLayoutResponse> {
    let url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/stream`;
    if (streamId) {
      url = url + `/${streamId}`;
    }

    let resp: VideoResponse<MultiStreamLayoutResponse | SingleStreamLayoutResponse>;
    if (streamId) {
      resp = await this.sendGetRequest<SingleStreamLayoutResponse>(url);
    } else {
      resp = await this.sendGetRequest<MultiStreamLayoutResponse>(url);
    }

    return resp.data;
  }

  protected async muteAllStreams(sessionId: string, active: boolean, excludedStreamIds: string[] = []): Promise<ProjectDetailsResponse> {
    const resp = await this.sendPostRequest<ProjectDetailsResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/mute`, {
      active,
      excludedStreamIds,
    });
    return resp.data;
  }

  public async muteStream(sessionId: string, streamId: string): Promise<ProjectDetailsResponse> {
    const resp = await this.sendPostRequest<ProjectDetailsResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/stream/${streamId}/mute`);
    return resp.data;
  }

  public async removeArchiveStream(archiveId: string, streamId: string): Promise<void> {
    await this.sendPatchRequest<void>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}/stream`, { removeStream: streamId });
  }

  public async removeStreamFromBroadcast(broadcastId: string, streamId: string): Promise<void> {
    await this.updateBroadcast({ broadcastId, removeStream: streamId });
  }

  public async searchArchives(filter?: ArchiveSearchFilter): Promise<MultiArchiveResponse> {
    const resp = await this.sendGetRequest<MultiArchiveResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive`, filter);
    return resp.data;
  }

  public async searchBroadcasts(filter?: BroadcastSearchFilter): Promise<MultiBroadcastResponse> {
    const resp = await this.sendGetRequest<MultiBroadcastResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/`, filter);
    return resp.data;
  }

  public async sendSignal(signal: { type: string; data: string }, sessionId: string, connectionId?: string): Promise<void> {
    let url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/signal`;
    if (connectionId) {
      url = `${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/connection/${connectionId}/signal`;
    }

    await this.sendPostRequest<void>(url, signal);
  }

  public async setStreamClassLists(sessionId: string, settings: StreamClassList[]): Promise<void> {
    await this.sendPutRequest<void>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/session/${sessionId}/stream`, { items: settings });
  }

  public async startArchive(sessionId: string, options?: ArchiveOptions): Promise<SingleArchiveResponse> {
    const data = Object.assign({}, { sessionId }, options);

    const resp = await this.sendPostRequest<SingleArchiveResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive`, data);
    return resp.data;
  }

  public async startBroadcast(sessionId: string, config: BroadcastConfig): Promise<BroadcastDetailsResponse> {
    const data = Object.assign({}, { sessionId }, config);
    const resp = await this.sendPostRequest<BroadcastDetailsResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/`, data);
    return resp.data;
  }

  public async stopArchive(archiveId: string): Promise<SingleArchiveResponse> {
    const resp = await this.sendPostRequest<SingleArchiveResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}/stop`);
    return resp.data;
  }

  public async stopBroadcast(broadcastId: string): Promise<BroadcastDetailsResponse> {
    const resp = await this.sendPostRequest<BroadcastDetailsResponse>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/${broadcastId}/stop`);
    return resp.data;
  }

  public async updateArchiveLayout(archiveId: string, layout: ArchiveLayout) {
    const resp = await this.sendPutRequest<void>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/archive/${archiveId}/layout`, layout);
    return resp.data;
  }

  public async updateBroadcast(config: BroadcastUpdateConfig): Promise<void> {
    await this.sendPatchRequest<void>(`${this.config.videoHost}/v2/project/${this.auth.applicationId}/broadcast/${config.broadcastId}/streams`, config);
  }
}
