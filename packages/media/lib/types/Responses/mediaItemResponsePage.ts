import { APILinks, APILink } from '@vonage/server-client';
import { MediaItemResponse } from './mediaItemResponse';

export type MediaItemPageResponse = {
  page_size: number;
  page_index: number;
  count: number;
  _embedded: {
    media: Array<MediaItemResponse>;
  };
  _links: {
    first?: APILink;
    last?: APILink;
    next?: APILink;
    prev?: APILink;
    start?: APILink;
  };
} & APILinks;
