import { Client, AuthenticationType, APILink } from '@vonage/server-client';
import {
  MediaItem,
  MediaParameters,
  MediaItemPageResponse,
  MediaItemResponse,
} from './types';

const apiToSdk = (media: MediaItemResponse): MediaItem =>
  Client.transformers.camelCaseObjectKeys(media) as MediaItem;

/**
 * Client class to interact with the Media API which enables users to manage
 * their media items programmatically.
 *
 * @remarks
 * This client is only available as a standalone client. It cannot be
 * instantiated from the server-sdk package.
 *
 * @example
 * Create a standalone Secret client
 *
 * ```ts
 * import { Media } from '@vonage/media';
 *
 * const mediaClient = new Media({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 */
export class Media extends Client {
  protected authType = AuthenticationType.JWT;

  /**
   * Retrieves a paginated list of media items, yielding each item sequentially.
   *
   * @param {MediaParameters} params - Optional parameters for customizing the media list request.
   * @return {AsyncGenerator<MediaItem, void, undefined>} An asynchronous generator that yields {@link MediaItem} objects.
   *
   * @example
   * List all media items
   * ```ts
   * for await (const media of mediaClient.listAllMediaItems()) {
   *   console.log(`Media item ${media.id} is ${media.public ? 'public' : 'private'}`);
   *   console.log(`  - Title: ${media.title}`);
   *   console.log(`  - Description: ${media.description}`);
   * };
   * ```
   *
   * @example
   * List all public media items
   * ```ts
   * for await (const media of mediaClient.listAllMediaItems({ public: true })) {
   *   console.log(`Media item ${media.id} is public`);
   *   console.log(`  - Title: ${media.title}`);
   *   console.log(`  - Description: ${media.description}`);
   * };
   * ```
   */
  async *listAllMediaItems(
    params: MediaParameters = {},
  ): AsyncGenerator<MediaItem, void & MediaItem, undefined> {
    let pageIndex = params.pageIndex || 0;
    let next: APILink | undefined;
    do {
      params.pageIndex = pageIndex;
      const resp = await this.getMediaPage(params);

      yield* resp._embedded?.media?.map(apiToSdk);

      pageIndex++;
      next = resp?._links?.next;
    } while (next);
  }

  /**
   * Retrieves a page of media items based on the specified parameters.
   *
   * @param {MediaParameters} params - Optional parameters for customizing the media page request.
   * @return {Promise<MediaItemPageResponse>} A promise that resolves to a {@link MediaItemPageResponse} object representing the page of media items.
   *
   * @example
   * List the first page of media items
   *
   * ```ts
   * const resp = await mediaClient.getMediaPage();
   *
   * console.log(`There are ${resp.count} media items in total`);
   * console.log(`Showing ${resp._embedded.media.length} media items on this page`);
   * ```
   */
  async getMediaPage(
    params: MediaParameters = {},
  ): Promise<MediaItemPageResponse> {
    const resp = await this.sendGetRequest<MediaItemPageResponse>(
      `${this.config.apiHost}/v3/media`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return resp.data;
  }

  /**
   * Retrieves information about a specific media item by its unique identifier.
   *
   * @param {string} mediaId - The unique identifier of the media item.
   * @return {Promise<MediaItem>} A promise that resolves to a {@link MediaItem} object representing the retrieved media item.
   *
   * @example
   * Retrieve a media item by its ID
   *
   * ```ts
   * const media = await mediaClient.getMediaItem('my-media-id');
   * console.log(`Media item ${media.id} is ${media.public ? 'public' : 'private'}`);
   * console.log(`  - Title: ${media.title}`);
   * console.log(`  - Description: ${media.description}`);
   * ```
   */
  async getMediaItem(mediaId: string): Promise<MediaItem> {
    const resp = await this.sendGetRequest<MediaItemResponse>(
      `${this.config.apiHost}/v3/media/${mediaId}/info`,
    );

    return apiToSdk(resp.data);
  }

  /**
   * Updates the information of a specific media item based on the provided data.
   *
   * @param {MediaItem} media - The updated media item data.
   * @return {Promise<void>} A promise that resolves once the media item is successfully updated.
   *
   * @example
   * Update a media item
   *
   * ```ts
   * const media = await mediaClient.getMediaItem('my-media-id');
   * media.title = 'My new title';
   * media.description = 'My new description';
   * await mediaClient.updateMediaItem(media);
   * ```
   */
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
    );
  }

  /**
   * Deletes a specific media item by its unique identifier.
   *
   * @param {string} mediaId - The unique identifier of the media item to be deleted.
   * @return {Promise<void>} A promise that resolves once the media item is successfully deleted.
   *
   * @example
   * Delete a media item
   *
   * ```ts
   * await mediaClient.deleteMediaItem('my-media-id');
   * ```
   */
  async deleteMediaItem(mediaId: string): Promise<void> {
    await this.sendDeleteRequest(`${this.config.apiHost}/v3/media/${mediaId}`);
  }
}
