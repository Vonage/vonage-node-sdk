import { Vetch } from './vetch';
import { VetchOptions } from './interfaces/vetchOptions';

export { Vetch, VetchOptions };

export const instance = new Vetch();

export async function request<T>(opts: VetchOptions) {
  return instance.request<T>(opts);
}
export { VetchError } from './types/vetchError';
export { Headers } from './interfaces/headers';
export { VetchPromise } from './types/vetchPromise';
export { VetchResponse } from './interfaces/vetchResponse';
export { ResponseTypes } from './enums/responseTypes';
