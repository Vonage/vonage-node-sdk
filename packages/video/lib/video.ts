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

    addArchiveStream(archiveId: string, streamId: string, audio: boolean = true, video: boolean = true) {}

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

    deleteArchive(archiveId: string) {}

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

    getArchive(archiveId: string) {}

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

    listArchives(filter: {[key: string]: string}) {}

    public async muteAllStreams(sessionId: string) {
        const localVetchOptions = {};

        localVetchOptions['url'] = `${this.config.baseUrl}/v2/project/${this.config.applicationId}/session/${sessionId}/mute`;
        localVetchOptions['headers'] = Object.assign({}, this.config.headers, { 'Authorization': 'Bearer ' + tokenGenerate(this.config.applicationId, this.config.privateKey) });
        localVetchOptions['method'] = 'POST';

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

    startArchive(sessionId: string, options?: {[key: string]: string}) {}

    stopArchive(archiveId: string) {}

    updateArchiveLayout(archiveId: string, options?: {[key: string]: string}) {}
}