import { AuthenticationType, Client } from '@vonage/server-client';
import { HTTPMethods, VetchOptions } from '@vonage/vetch';
import {
  FindListItemParams,
  FindListParams,
  ImportFileResponse,
  List,
  ListItem,
  ListItemPageResponse,
  ListItemResponse,
  ListPageResponse,
  ListResponse,
} from './types';
import pick from 'lodash.pick';
import { readFileSync, writeFileSync } from 'fs';
import FormData from 'form-data';

const apiListToList = (list: ListResponse): List => {
  delete list?._links;
  return Client.transformers.camelCaseObjectKeys(list, true) as List;
};

const apiItemToItem = <T>(item: ListItemResponse<T>): ListItem<T> => {
  delete item?._links;
  // do not deep transform as the data property has to remain the same
  return Client.transformers.camelCaseObjectKeys(item) as ListItem<T>;
};

/**
 * Represents an API client for interacting with the Vonage Proactive Connect
 * API. This client provides methods for managing lists, list items, and
 * performing import/export operations.
 */
export class ProactiveConnect extends Client {
  public FORM_BOUNDARY = '-------------------------Vonage-Node_SDK';

  public authType = AuthenticationType.JWT;

  public static LIST_WRITE_KEYS = [
    'name',
    'description',
    'tags',
    'attributes',
    'datasource',
  ];

  /**
   * Retrieves all lists available in the Vonage Proactive Connect API.
   *
   * @param {FindListParams} params - Optional parameters for pagination and filtering.
   * @return {AsyncGenerator<List, void, undefined>} An async generator that yields lists as they are retrieved.
   *
   * @throws {Error} If there's an issue with the API request.
   */
  async *findAllLists(
    params: FindListParams = {},
  ): AsyncGenerator<List, void & List, undefined> {
    let next = null;
    params.page = params?.page || 1;
    do {
      const resp = await this.sendGetRequest<ListPageResponse>(
        `${this.config.proactiveHost}/v0.1/bulk/lists`,
        Client.transformers.snakeCaseObjectKeys(params, true),
      );

      yield* resp?.data?._embedded?.lists.map(apiListToList);
      next = resp?.data?._links?.next;
      params.page++;
    } while (next);
  }

  /**
   * Creates a new list in the Vonage Proactive Connect API.
   *
   * @param {List} list - The list object representing the list to be created.
   * @return {Promise<List>} A promise that resolves to the newly created list.
   *
   * @throws {Error} If there's an issue with the API request or the list creation fails.
   */
  async createList(list: List): Promise<List> {
    const resp = await this.sendPostRequest<ListResponse>(
      `${this.config.proactiveHost}/v0.1/bulk/lists`,
      pick(
        Client.transformers.snakeCaseObjectKeys(list, true),
        ProactiveConnect.LIST_WRITE_KEYS,
      ),
    );

    return apiListToList(resp.data);
  }

  /**
   * Retrieves a list by its unique identifier from the Vonage Proactive Connect API.
   *
   * @param {string} listId - The unique identifier of the list to retrieve.
   * @return {Promise<List>} A promise that resolves to the retrieved list.
   *
   * @throws {Error} If there's an issue with the API request or the list retrieval fails.
   */
  async getListById(listId: string): Promise<List> {
    const resp = await this.sendGetRequest<ListResponse>(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}`,
    );
    return apiListToList(resp?.data);
  }

  async updateList(listId: string, list: List): Promise<List> {
    const resp = await this.sendPutRequest<ListResponse>(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}`,
      pick(
        Client.transformers.snakeCaseObjectKeys(list, true),
        ProactiveConnect.LIST_WRITE_KEYS,
      ),
    );

    return apiListToList(resp.data);
  }

  /**
   * Updates an existing list in the Vonage Proactive Connect API by its unique identifier.
   *
   * @param {string} listId - The unique identifier of the list to update.
   * @return {Promise<List>} A promise that resolves to the updated list.
   *
   * @throws {Error} If there's an issue with the API request or the list update fails.
   */
  async deleteList(listId: string): Promise<true> {
    await this.sendDeleteRequest(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}`,
    );
    return true;
  }

  /**
   * Clears all data from an existing list in the Vonage Proactive Connect API by its unique identifier.
   *
   * @param {string} listId - The unique identifier of the list to clear.
   * @return {Promise<true>} A promise that resolves to `true` if the list is successfully cleared.
   *
   * @throws {Error} If there's an issue with the API request or the list clearing fails.
   */
  async clearList(listId: string): Promise<true> {
    await this.sendPostRequest(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/clear`,
    );
    return true;
  }

  /**
   * Retrieves all list items from a specific list in the Vonage Proactive Connect API.
   *
   * @param {string} listId - The unique identifier of the list to retrieve items from.
   * @param {FindListItemParams} params - Optional parameters for pagination and filtering.
   * @return {AsyncGenerator<ListItem, void, undefined>} An async generator that yields list items as they are retrieved.
   *
   * @throws {Error} If there's an issue with the API request.
   */
  async *findAllListItems<T>(
    listId: string,
    params: FindListItemParams = {},
  ): AsyncGenerator<ListItem<T>, void & ListItem<T>, undefined> {
    let next = null;
    params.page = params?.page || 1;
    do {
      const resp = await this.sendGetRequest<ListItemPageResponse<T>>(
        `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items`,
        Client.transformers.snakeCaseObjectKeys(params, true),
      );

      yield* resp?.data?._embedded?.items.map(apiItemToItem<T>);
      next = resp?.data?._links?.next;
      params.page++;
    } while (next);
  }

  /**
   * Creates a new list item in a specific list of the Vonage Proactive Connect API.
   *
   * @param {string} listId - The unique identifier of the list to add the item to.
   * @param {ListItem} item - The list item object representing the item to be created.
   * @return {Promise<ListItem>} A promise that resolves to the newly created list item.
   *
   * @throws {Error} If there's an issue with the API request or the list item creation fails.
   */
  async createListItem<T>(
    listId: string,
    item: ListItem<T>,
  ): Promise<ListItem<T>> {
    const resp = await this.sendPostRequest<ListItemResponse<T>>(
      `${this.config.proactiveHost}/v0.1/bulk/lists`,
      {
        data: item.data,
      },
    );

    return apiItemToItem<T>(resp.data);
  }

  /**
   * Retrieves a specific list item by its unique identifier from a list in the Vonage Proactive Connect API.
   *
   * @param {string} listId - The unique identifier of the list containing the item.
   * @param {string} itemId - The unique identifier of the list item to retrieve.
   * @return {Promise<ListItem>} A promise that resolves to the retrieved list item.
   *
   * @throws {Error} If there's an issue with the API request or the list item retrieval fails.
   */
  async getListItemById<T>(
    listId: string,
    itemId: string,
  ): Promise<ListItem<T>> {
    const resp = await this.sendGetRequest<ListItemResponse<T>>(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/${itemId}`,
    );

    return apiItemToItem<T>(resp.data);
  }

  /**
   * Updates an existing list item in a specific list of the Vonage Proactive Connect API by its unique identifier.
   *
   * @param {string} listId - The unique identifier of the list containing the item.
   * @param {string} itemId - The unique identifier of the list item to update.
   * @param {ListItem} item - The list item object representing the updated item.
   * @return {Promise<ListItem>} A promise that resolves to the updated list item.
   *
   * @throws {Error} If there's an issue with the API request or the list item update fails.
   */
  async updateListItem<T>(
    listId: string,
    itemId: string,
    item: ListItem<T>,
  ): Promise<ListItem<T>> {
    const resp = await this.sendPutRequest<ListItemResponse<T>>(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/${itemId}`,
      {
        data: item.data,
      },
    );

    return apiItemToItem<T>(resp.data);
  }

  /**
   * Deletes a specific list item by its unique identifier from a list in the Vonage Proactive Connect API.
   *
   * @param {string} listId - The unique identifier of the list containing the item to delete.
   * @param {string} itemId - The unique identifier of the list item to delete.
   * @return {Promise<true>} A promise that resolves to `true` if the list item is successfully deleted.
   *
   * @throws {Error} If there's an issue with the API request or the list item deletion fails.
   */
  async deleteListItem(listId: string, itemId: string): Promise<true> {
    await this.sendDeleteRequest(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/${itemId}`,
    );
    return true;
  }

  /**
   * Downloads a file containing all list items from a specific list in the Vonage Proactive Connect API.
   *
   * @param {string} listId - The unique identifier of the list to download items from.
   * @param {string} file - The path to the file where the list items will be saved.
   * @return {Promise<true>} A promise that resolves to `true` if the list items are successfully downloaded and saved to the file.
   *
   * @throws {Error} If there's an issue with the API request or the file download fails.
   */
  async downloadListItems(listId: string, file: string): Promise<true> {
    const resp = await this.sendGetRequest<string>(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/download`,
    );

    writeFileSync(file, resp.data);
    return true;
  }

  /**
   * Imports list items from a CSV file into a specific list in the Vonage Proactive Connect API.
   *
   * @param {string} listId - The unique identifier of the list to import items into.
   * @param {string} file - The path to the CSV file containing the list items to import.
   * @return {Promise<ImportFileResponse>} A promise that resolves to an import response containing details on the number of items inserted, updated, and deleted.
   *
   * @throws {Error} If there's an issue with the API request or the import process fails.
   */
  async importListItems(
    listId: string,
    file: string,
  ): Promise<ImportFileResponse> {
    const itemsForm = new FormData();
    itemsForm.setBoundary(this.FORM_BOUNDARY);
    itemsForm.append('file', readFileSync(file));

    const resp = await this.sendRequest<ImportFileResponse>({
      url: `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/download`,
      data: itemsForm.toString(),
      method: HTTPMethods.POST,
    } as VetchOptions);

    return resp.data;
  }
}
