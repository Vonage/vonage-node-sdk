import { Auth } from "@vonage/auth";
import { request, ResponseTypes } from "@vonage/vetch";
import { tokenGenerate } from "@vonage/jwt";
import { VideoClassParameters } from "./parameters/VideoClassParameters";
import { VideoResponse } from "./interfaces/VideoResponse";
import { CreateSessionResponse } from "./interfaces/Response/CreateSessionResponse";
import { EmptyResponse } from "./interfaces/Response/EmptyResponse";
import { MultiStreamLayoutResponse } from "./interfaces/Response/MultiStreamLayoutResponse";
import { SingleStreamLayoutResponse } from "./interfaces/Response/SingleStreamLayoutResponse";
import { ProjectDetailsResponse } from "./interfaces/Response/ProjectDetailsResponse";
import { ArchiveOptions } from "./interfaces/ArchiveOptions";
import { SingleArchiveResponse } from "./interfaces/Response/SingleArchiveResponse";
import { MultiArchiveResponse } from "./interfaces/Response/MultiArchiveResponse";
import { ArchiveSearchFilter } from "./interfaces/ArchiveSearchFilter";
import { ArchiveLayout } from "./interfaces/ArchiveLayout";

// export const BASE_URL = "https://video.api.vonage.com/".replace(/\/+$/, "");
export const BASE_URL = "https://api.opentok.com/".replace(/\/+$/, "");

const runRequest = async <T>(options: any, config: any): Promise<VideoResponse<T>> => {
    let result = await request<T>(options);
    return result;
}

export class Video {
    protected config: VideoClassParameters;

    constructor(opts?: VideoClassParameters) {
        if (opts) {
            opts['auth'] = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, privateKey: opts.privateKey, applicationId: opts.applicationId, signature: opts.signature });
            opts['baseUrl'] = opts.baseUrl || BASE_URL;
            opts['responseType'] = opts.responseType || ResponseTypes.json;
            this.config = opts;
        }
    }

    public async addArchiveStream(archiveId: string, streamId: string, audio: boolean = true, video: boolean = true) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}/stream`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'PATCH';
        localVetchOptions['data'] = {
            addStream: streamId,
            hasAudio: audio,
            hasVideo: video
        };

        const resp = await runRequest<EmptyResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async createSession(archiveMode?: string, location?: string, p2pPreference?: string) {
        const localVetchOptions = {};
        const data = {};

        if (archiveMode) { data['archiveMode'] = archiveMode; }
        if (location) { data['location'] = location; }
        if (p2pPreference) { data['p2p.preference'] = p2pPreference; }

        localVetchOptions['url'] = `${this.config.baseUrl}/session/create`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'POST';

        if (Object.keys(data).length) { localVetchOptions['data'] = data; }

        const resp = await runRequest<CreateSessionResponse[]>(localVetchOptions, this.config);
        return resp.data;
    }

    public async deleteArchive(archiveId: string) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'DELETE';

        const resp = await runRequest<EmptyResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async disconnectClient(sessionId: string, connectionId: string) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/connection/${connectionId}`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'DELETE';

        await runRequest<EmptyResponse>(localVetchOptions, this.config);
    }

    generateClientToken(sessionId: string) {
        return tokenGenerate(
            this.config.applicationId,
            this.config.privateKey,
            {
                scope: 'session.connect',
                'session_id': sessionId
            }
        );
    }

    public async getArchive(archiveId: string) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'GET';

        const resp = await runRequest<SingleArchiveResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async getStreamInfo(sessionId: string, streamId?: string) {
        const localVetchOptions = {};

        let url = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/stream`
        if (streamId) {
            url = url + `/${streamId}`
        }

        localVetchOptions['url'] = url;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'GET';

        let resp: VideoResponse<MultiStreamLayoutResponse | SingleStreamLayoutResponse>;
        if (streamId) {
            resp = await runRequest<SingleStreamLayoutResponse>(localVetchOptions, this.config);
        } else {
            resp = await runRequest<MultiStreamLayoutResponse>(localVetchOptions, this.config);
        }
        
        return resp.data;
    }

    public async muteAllStreams(sessionId: string, active: boolean, excludedStreamIds: string[] = []) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/mute`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'POST';
        localVetchOptions['data'] = { active, excludedStreamIds };

        const resp = await runRequest<ProjectDetailsResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async muteStream(sessionId: string, streamId: string) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/stream/${streamId}/mute`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'POST';

        const resp = await runRequest<ProjectDetailsResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async removeArchiveStream(archiveId: string, streamId: string) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}/stream`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'PATCH';
        localVetchOptions['data'] = { removeStream: streamId }

        const resp = await runRequest<EmptyResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async searchArchives(filter?: ArchiveSearchFilter) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'GET';
        if (filter) { localVetchOptions['params'] = filter }

        const resp = await runRequest<MultiArchiveResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async sendSignal(signal: {type: string, data: string}, sessionId: string, connectionId?: string) {
        const localVetchOptions = {};

        let url = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/signal`
        if (connectionId) {
            url = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/connection/${connectionId}/signal`
        }

        localVetchOptions['url'] = url;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'POST';
        localVetchOptions['data'] = signal;

        await runRequest<EmptyResponse>(localVetchOptions, this.config);
    }

    public async startArchive(sessionId: string, options?: ArchiveOptions) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'POST';
        localVetchOptions['data'] = Object.assign({}, { sessionId }, options);

        const resp = await runRequest<SingleArchiveResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async stopArchive(archiveId: string) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}/stop`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'POST';

        const resp = await runRequest<SingleArchiveResponse>(localVetchOptions, this.config);
        return resp.data;
    }

    public async updateArchiveLayout(archiveId: string, layout: ArchiveLayout) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/archive/${archiveId}/layout`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'PUT';
        localVetchOptions['data'] = layout;

        const resp = await runRequest<EmptyResponse[]>(localVetchOptions, this.config);
        return resp.data;
    }
}