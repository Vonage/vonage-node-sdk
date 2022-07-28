import { Auth } from '@vonage/auth';
import { request, ResponseTypes } from '@vonage/vetch';
import { tokenGenerate } from '@vonage/jwt';
import { VideoClassParameters } from './parameters/VideoClassParameters';
import { VideoResponse } from './interfaces/VideoResponse';
import { CreateSessionResponse } from './interfaces/Response/CreateSessionResponse';
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

export const BASE_URL = 'https://video.api.vonage.com/'.replace(/\/+$/, '');

const runRequest = async <T>(options: any, config: any): Promise<VideoResponse<T>> => {
  const result = await request<T>(options);
  return result;
};

export class Video {
  protected config: VideoClassParameters;

  constructor(opts?: VideoClassParameters) {
    if (opts) {
      opts.auth = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, privateKey: opts.privateKey, applicationId: opts.applicationId, signature: opts.signature });
      opts.baseUrl = opts.baseUrl || BASE_URL;
      opts.responseType = opts.responseType || ResponseTypes.json;
      this.config = opts;
    }
  }

  public async addArchiveStream(archiveId: string, streamId: string, audio: boolean = true, video: boolean = true) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}/stream`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'PATCH',
      data: {
        addStream: streamId,
        hasAudio: audio,
        hasVideo: video,
      },
    };

    const resp = await runRequest<void>(localVetchOptions, this.config);
    return resp.data;
  }

  public async createSession(sessionOptions?: { archiveMode?: ArchiveMode; location?: string; mediaMode?: MediaMode }): Promise<Session> {
    const data = {
      archiveMode: sessionOptions?.archiveMode ?? ArchiveMode.MANUAL,
      'p2p.preference': sessionOptions?.mediaMode ?? MediaMode.ROUTED,
      location: sessionOptions?.location ?? null,
    };

    const localVetchOptions = {
      url: `${this.config.baseUrl}/session/create`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'POST',
      body: new URLSearchParams(data),
    };

    const resp = await runRequest<CreateSessionResponse[]>(localVetchOptions, this.config);

    return {
      sessionId: resp.data[0].session_id,
      archiveMode: data.archiveMode,
      mediaMode: data['p2p.preference'],
      location: data.location,
    };
  }

  public async deleteArchive(archiveId: string) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'DELETE',
    };

    const resp = await runRequest<void>(localVetchOptions, this.config);
    return resp.data;
  }

  public async disableForceMute(sessionId: string, excludedStreamIds: string[] = []) {
    return this.muteAllStreams(sessionId, false, excludedStreamIds);
  }

  public async disconnectClient(sessionId: string, connectionId: string) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/connection/${connectionId}`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'DELETE',
    };

    await runRequest<void>(localVetchOptions, this.config);
  }

  public async forceMuteAll(sessionId: string, excludedStreamIds: string[] = []) {
    return this.muteAllStreams(sessionId, true, excludedStreamIds);
  }

  public generateClientToken(sessionId: string, tokenOptions?: ClientTokenOptions) {
    return tokenGenerate(
      this.config.applicationId,
      this.config.privateKey,
      Object.assign(
        {
          scope: 'session.connect',
          session_id: sessionId,
        },
        tokenOptions,
      ),
    );
  }

  public async getArchive(archiveId: string) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'GET',
    };

    const resp = await runRequest<SingleArchiveResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async getStreamInfo(sessionId: string, streamId?: string) {
    let url = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/stream`;
    if (streamId) {
      url = url + `/${streamId}`;
    }

    const localVetchOptions = {
      url,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'GET',
    };

    let resp: VideoResponse<MultiStreamLayoutResponse | SingleStreamLayoutResponse>;
    if (streamId) {
      resp = await runRequest<SingleStreamLayoutResponse>(localVetchOptions, this.config);
    } else {
      resp = await runRequest<MultiStreamLayoutResponse>(localVetchOptions, this.config);
    }

    return resp.data;
  }

  protected async muteAllStreams(sessionId: string, active: boolean, excludedStreamIds: string[] = []) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/mute`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'POST',
      data: { active, excludedStreamIds },
    };

    const resp = await runRequest<ProjectDetailsResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async muteStream(sessionId: string, streamId: string) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/stream/${streamId}/mute`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'POST',
    };

    const resp = await runRequest<ProjectDetailsResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async removeArchiveStream(archiveId: string, streamId: string) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}/stream`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'PATCH',
      data: { removeStream: streamId },
    };

    await runRequest<void>(localVetchOptions, this.config);
  }

  public async searchArchives(filter?: ArchiveSearchFilter) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'GET',
      params: filter,
    };
    if (!filter) {
      delete localVetchOptions.params;
    }

    const resp = await runRequest<MultiArchiveResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async sendSignal(signal: { type: string; data: string }, sessionId: string, connectionId?: string) {
    let url = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/signal`;
    if (connectionId) {
      url = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/connection/${connectionId}/signal`;
    }

    const localVetchOptions = {
      url,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'POST',
      data: signal,
    };

    await runRequest<void>(localVetchOptions, this.config);
  }

  public async setStreamClassLists(sessionId: string, settings: StreamClassList[]) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/stream`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'PUT',
      data: {
        items: settings,
      },
    };

    await runRequest<void>(localVetchOptions, this.config);
  }

  public async startArchive(sessionId: string, options?: ArchiveOptions) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'POST',
      data: Object.assign({}, { sessionId }, options),
    };

    const resp = await runRequest<SingleArchiveResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async stopArchive(archiveId: string) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}/stop`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'POST',
    };

    const resp = await runRequest<SingleArchiveResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async updateArchiveLayout(archiveId: string, layout: ArchiveLayout) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}/layout`,
      headers: Object.assign({}, this.config.headers, { Authorization: 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) }),
      method: 'PUT',
      data: layout,
    };

    const resp = await runRequest<void>(localVetchOptions, this.config);
    return resp.data;
  }
}
