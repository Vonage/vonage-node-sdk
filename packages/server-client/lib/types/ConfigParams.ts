import { ResponseTypes } from '@vonage/vetch';
export type ConfigParams = {
  restHost?: string;
  apiHost?: string;
  videoHost?: string;
  responseType?: ResponseTypes;
  timeout?: number;
  proactiveHost?: string;
  meetingsHost?: string;
  appendUserAgent?: string;
};
