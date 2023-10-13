import { Client, AuthenticationType, APILink } from '@vonage/server-client';
import {
  MediaItem,
  MediaParameters,
  MediaItemPageResponse,
  MediaItemResponse,
} from './types/index';

const apiToSdk = (media: MediaItemResponse): MediaItem =>
  Client.transformers.camelCaseObjectKeys(media);

export class Media extends Client {
  protected authType = AuthenticationType.JWT;

  async *listAllMediaItems(
    params: MediaParameters = {},
  ): AsyncGenerator<MediaItem, void & MediaItem, undefined> {
    let pageIndex = params.pageIndex || 0;
    let next: APILink;
    do {
      params.pageIndex = pageIndex;
      const resp = await this.getMediaPage(params);

      yield* resp._embedded?.media?.map(apiToSdk);

      pageIndex++;
      next = resp._links?.next;
    } while (next);
  }

  async getMediaPage(
    params: MediaParameters = {},
  ): Promise<MediaItemPageResponse> {
    const resp = await this.sendGetRequest<MediaItemPageResponse>(
      `${this.config.apiHost}/v3/media`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return resp.data;
  }

  async getMediaItem(mediaId: string): Promise<MediaItem> {
    const resp = await this.sendGetRequest<MediaItemResponse>(
      `${this.config.apiHost}/v3/media/${mediaId}/info`,
    );

    return apiToSdk(resp.data);
  }

  async updateMediaItem(media: MediaItem): Promise<void> {
    await this.sendPutRequest(
      `${this.config.apiHost}/v3/media/${media.id}`,
      {
        public: media.public,
        metadata_primary: media.metadataPrimary,
        metadata_secondary: media.metadataSecondary,
        title: media.title,
        description: media.description,
        mime_type: media.mimeType,
        max_downloads_allowed: media.maxDownloadsAllowed,
      },
      'PUT',
    );
  }

  async deleteMediaItem(mediaId: string): Promise<void> {
    await this.sendDeleteRequest(`${this.config.apiHost}/v3/media/${mediaId}`);
  }
}
