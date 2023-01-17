import { VetchResponse } from '../interfaces/vetchResponse';
import { VetchOptions } from '../interfaces/vetchOptions';

export class VetchError extends Error {
  code?: string;
  config: VetchOptions;
  response: VetchResponse<any>;

  constructor(message: string, options: VetchOptions) {
    super(message);
    this.config = options;
  }
}
