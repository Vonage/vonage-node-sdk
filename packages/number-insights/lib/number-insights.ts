import { Auth } from "@vonage/auth";
import { request, ResponseTypes } from "@vonage/vetch";
import { AdvancedLookupOptions } from "./interfaces/AdvancedLookupOptions";
import { AsyncAdvancedLookupOptions } from "./interfaces/AsyncAdvancedLookupOptions";
import { BasicLookupOptions } from "./interfaces/BasicLookupOptions";
import { NumberInsightsResponse } from "./interfaces/NumberInsightsResponse";
import { AdvancedResponse } from "./interfaces/Responses/AdvancedResponse";
import { BasicResponse } from "./interfaces/Responses/BasicResponse";
import { StandardResponse } from "./interfaces/Responses/StandardResponse";
import { StandardLookupOptions } from "./interfaces/StandardLookupOptions";
import { NumberInsightsClassParameters } from "./types/NumberInsightsClassParameters";

export const BASE_URL = 'https://api.nexmo.com/ni/'.replace(/\/+$/, '');

const runRequest = async <T>(options: any, config: any): Promise<NumberInsightsResponse<T>> => {
    options.params = Object.assign(options.params, { api_key: config.auth.apiKey, api_secret: config.auth.apiSecret });
    const result = await request<T>(options);
    return result;
  };

export class NumberInsights {
  protected config: NumberInsightsClassParameters;

  constructor(opts?: NumberInsightsClassParameters) {
    if (opts) {
      opts.auth = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret });
      opts.baseUrl = opts.baseUrl || BASE_URL;
      opts.responseType = opts.responseType || ResponseTypes.json;
      this.config = opts;
    }
  }

  public async advancedLookup(number: string, options?: AdvancedLookupOptions) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/advanced/json`,
      params: { number },
      method: 'GET'
    }

    if (options?.country) { localVetchOptions.params['country'] = options.country; }
    if (options?.cname) { localVetchOptions.params['cname'] = options.cname; }
    if (options?.real_time_data ) { localVetchOptions.params['real_time_data '] = options.real_time_data ; }

    const resp = await runRequest<AdvancedResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async asyncAdvancedLookup(number: string, callback: string, options: StandardLookupOptions) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/advanced/async/json`,
      params: { number, callback },
      method: 'GET'
    }

    if (options?.country) { localVetchOptions.params['country'] = options.country; }
    if (options?.cname) { localVetchOptions.params['cname'] = options.cname; }

    const resp = await runRequest<AdvancedResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async basicLookup(number: string, options?: BasicLookupOptions) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/basic/json`,
      params: { number },
      method: 'GET'
    }

    if (options?.country) { localVetchOptions.params['country'] = options.country; }

    const resp = await runRequest<BasicResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async standardLookup(number: string, options?: StandardLookupOptions) {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/standard/json`,
      params: { number },
      method: 'GET'
    }

    if (options?.country) { localVetchOptions.params['country'] = options.country; }
    if (options?.cname) { localVetchOptions.params['cname'] = options.cname; }

    const resp = await runRequest<StandardResponse>(localVetchOptions, this.config);
    return resp.data;
  }
}