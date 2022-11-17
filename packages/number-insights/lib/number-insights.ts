import { Client } from '@vonage/server-client';
import { AdvancedLookupOptions } from './interfaces/AdvancedLookupOptions';
import { BasicLookupOptions } from './interfaces/BasicLookupOptions';
import { AdvancedResponse } from './interfaces/Responses/AdvancedResponse';
import {
    AsyncAdvancedResponse,
} from './interfaces/Responses/AsyncAdvancedResponse';
import { BasicResponse } from './interfaces/Responses/BasicResponse';
import { StandardResponse } from './interfaces/Responses/StandardResponse';
import { StandardLookupOptions } from './interfaces/StandardLookupOptions';

export class NumberInsights extends Client {
    public async advancedLookup(
        phoneNumber: string,
        options?: AdvancedLookupOptions,
    ): Promise<AdvancedResponse> {
        const params = { number: phoneNumber, ...options };
        const resp = await this.sendGetRequest<AdvancedResponse>(
            `${this.config.apiHost}/ni/advanced/json`,
            params,
        );
        return resp.data;
    }

    public async asyncAdvancedLookup(
        phoneNumber: string,
        callback: string,
        options: StandardLookupOptions,
    ): Promise<AsyncAdvancedResponse> {
        const params = { number: phoneNumber, callback, ...options };
        const resp = await this.sendGetRequest<AsyncAdvancedResponse>(
            `${this.config.apiHost}/ni/advanced/async/json`,
            params,
        );
        return resp.data;
    }

    public async basicLookup(
        phoneNumber: string,
        options?: BasicLookupOptions,
    ): Promise<BasicResponse> {
        const params = { number: phoneNumber, ...options };
        const resp = await this.sendGetRequest<BasicResponse>(
            `${this.config.apiHost}/ni/basic/json`,
            params,
        );
        return resp.data;
    }

    public async standardLookup(
        phoneNumber: string,
        options?: StandardLookupOptions,
    ): Promise<StandardResponse> {
        const params = { number: phoneNumber, ...options };
        const resp = await this.sendGetRequest<StandardResponse>(
            `${this.config.apiHost}/ni/standard/json`,
            params,
        );
        return resp.data;
    }
}
