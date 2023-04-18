import { AuthenticationType, Client } from '@vonage/server-client';
import { HTTPMethods } from '@vonage/vetch';
import {
  FindListItemParams,
  FindListParams,
  List,
  ListItem,
  ListPageResponse,
  ListItemPageResponse,
  ListItemResponse,
  ListResponse,
  ImportFileResponse,
} from './types';
import pick from 'lodash.pick';
import { readFileSync, writeFileSync } from 'fs';
import FormData from 'form-data';

const apiListToList = (list: ListResponse): List => {
  delete list?._links;
  return Client.transformers.camelCaseObjectKeys(list, true);
};

const apiItemToItem = <T>(item: ListItemResponse<T>): ListItem<T> => {
  delete item?._links;
  // do not deep transform as the data property has to remain the same
  return Client.transformers.camelCaseObjectKeys(item);
};

export class ProactiveConnect extends Client {
  public FORM_BOUNDARY = '-------------------------Vonage-Node_SDK';

  protected authType = AuthenticationType.JWT;

  public static LIST_WRITE_KEYS = [
    'name',
    'description',
    'tags',
    'attributes',
    'datasource',
  ];

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

  async deleteList(listId: string): Promise<true> {
    await this.sendDeleteRequest(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}`,
    );
    return true;
  }

  async clearList(listId: string): Promise<true> {
    await this.sendPostRequest(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/clear`,
    );
    return true;
  }

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

  async getListItemById<T>(
    listId: string,
    itemId: string,
  ): Promise<ListItem<T>> {
    const resp = await this.sendGetRequest<ListItemResponse<T>>(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/${itemId}`,
    );

    return apiItemToItem<T>(resp.data);
  }

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

  async deleteListItem(listId: string, itemId: string): Promise<true> {
    await this.sendDeleteRequest(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/${itemId}`,
    );
    return true;
  }

  async downloadListItems(listId: string, file: string): Promise<true> {
    const resp = await this.sendGetRequest<string>(
      `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/download`,
    );

    writeFileSync(file, resp.data);
    return true;
  }

  async importListItems(
    listId: string,
    file: string,
  ): Promise<ImportFileResponse> {
    const itemsForm = new FormData();
    itemsForm.setBoundary(this.FORM_BOUNDARY);
    itemsForm.append('file', readFileSync(file));

    const resp = await this.sendRequest<ImportFileResponse>({
      url: `${this.config.proactiveHost}/v0.1/bulk/lists/${listId}/items/download`,
      body: itemsForm,
      method: HTTPMethods.POST,
    });

    return resp.data;
  }
}
