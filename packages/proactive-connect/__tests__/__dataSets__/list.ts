import { BASE_URL } from '../common';
import { Client } from '@vonage/server-client';
import { SyncStatus } from '../../lib/enums';
import {
  List,
  ListManualDatasource,
  ListPageResponse,
  ListResponse,
  ListSalesForceDataSource,
  WriteListRequest,
  ProactiveConnect,
} from '../../lib';
import pick from 'lodash.pick';

const listOne = {
  name: 'List 1',
  itemsCount: 0,
  datasource: {
    type: 'manual',
  } as ListManualDatasource,
  id: '00000000-0000-0000-0000-000000000001',
  createdAt: '2023-04-17T15:11:19.711Z',
  updatedAt: '2023-04-17T17:57:48.255Z',
  syncStatus: {
    value: SyncStatus.COMPLETED,
    metadataModified: false,
    dataModified: false,
    dirty: false,
  },
} as List;

const listTwo = {
  name: 'List 2',
  itemsCount: 0,
  tags: ['tag one'],
  attributes: [
    {
      name: 'foo',
      alias: 'bar',
    },
    {
      name: 'fizz',
      alias: 'buzz',
      key: true,
    },
  ],
  datasource: {
    type: 'salesforce',
    integrationId: 'sales-force-id',
    soql: 'Select * from contact',
  } as ListSalesForceDataSource,
  id: '00000000-0000-0000-0000-000000000002',
  createdAt: '2023-04-17T15:11:19.711Z',
  updatedAt: '2023-04-17T17:57:48.255Z',
  syncStatus: {
    value: SyncStatus.COMPLETED,
    metadataModified: false,
    dataModified: false,
    dirty: false,
  },
} as List;

const listThree = {
  name: 'List 3',
  itemsCount: 0,
  datasource: {
    type: 'manual',
  } as ListManualDatasource,
  id: '00000000-0000-0000-0000-000000000003',
  createdAt: '2023-04-17T15:11:19.711Z',
  updatedAt: '2023-04-17T17:57:48.255Z',
  syncStatus: {
    value: SyncStatus.COMPLETED,
    metadataModified: false,
    dataModified: false,
    dirty: false,
  },
};
export default [
  {
    label: 'find all lists',
    requests: [
      ['/v0.1/bulk/lists?page=1', 'GET'],
      ['/v0.1/bulk/lists?page=2', 'GET'],
    ],
    responses: [
      [
        201,
                {
                  page: 1,
                  page_size: 2,
                  total_items: 3,
                  total_pages: 2,
                  order: 'asc',
                  _embedded: {
                    lists: [
                      {
                        ...Client.transformers.snakeCaseObjectKeys(
                          listOne,
                        ),
                        _links: {
                          self: {
                            href: `${BASE_URL}/v0.1/bulk/lists/${listOne.id}`,
                          },
                        },
                      },
                      {
                        ...Client.transformers.snakeCaseObjectKeys(
                          listTwo,
                        ),
                        _links: {
                          self: {
                            href: `${BASE_URL}/v0.1/bulk/lists/${listTwo.id}`,
                          },
                        },
                      },
                    ],
                  },
                  _links: {
                    next: {
                      href: `${BASE_URL}/v0.1/bulk/lists?page_size=1&order=asc&page=2`,
                    },
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists?page_size=1&order=asc&page=1`,
                    },
                  },
                } as ListPageResponse,
      ],
      [
        200,
                {
                  page: 3,
                  page_size: 1,
                  total_items: 3,
                  total_pages: 3,
                  order: 'asc',
                  _embedded: {
                    lists: [
                      {
                        ...Client.transformers.snakeCaseObjectKeys(
                          listThree,
                        ),
                        _links: {
                          self: {
                            href: `${BASE_URL}/v0.1/bulk/lists/${listThree.id}`,
                          },
                        },
                      },
                    ],
                  },
                  _links: {
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists?page_size=1&order=asc&page=2`,
                    },
                  },
                } as ListPageResponse,
      ],
    ],
    clientMethod: 'findAllLists',
    parameters: [],
    generator: true,
    error: false,
    expected: [listOne, listTwo, listThree],
  },
  {
    label: 'create list',
    requests: [
      [
        '/v0.1/bulk/lists',
        'POST',
                {
                  name: listOne.name,
                  description: listOne.description,
                  tags: listOne.tags,
                  attributes: listOne.attributes,
                  datasource: listOne.datasource,
                } as WriteListRequest,
      ],
    ],
    responses: [
      [
        202,
                {
                  ...Client.transformers.snakeCaseObjectKeys(listOne),
                  _links: {
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists?page_size=1&order=asc&page=1`,
                    },
                  },
                } as ListResponse,
      ],
    ],
    clientMethod: 'createList',
    parameters: [
      {
        name: listOne.name,
        description: listOne.description,
        tags: listOne.tags,
        attributes: listOne.attributes,
        datasource: listOne.datasource,
      },
    ],
    error: false,
    expected: listOne,
  },
  {
    label: 'get list by id',
    requests: [[`/v0.1/bulk/lists/${listOne.id}`, 'GET']],
    responses: [
      [
        200,
                {
                  ...Client.transformers.snakeCaseObjectKeys(listOne),
                  _links: {
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists/${listOne.id}`,
                    },
                  },
                } as ListResponse,
      ],
    ],
    clientMethod: 'getListById',
    parameters: [listOne.id],
    error: false,
    expected: listOne,
  },
  {
    label: 'update list',
    requests: [
      [
        `/v0.1/bulk/lists/${listTwo.id}`,
        'PUT',
                pick(
                  Client.transformers.snakeCaseObjectKeys(listTwo, true),
                  ProactiveConnect.LIST_WRITE_KEYS,
                ) as WriteListRequest,
      ],
    ],
    responses: [
      [
        200,
                {
                  ...Client.transformers.snakeCaseObjectKeys(listTwo, true),
                  _links: {
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists/${listTwo.id}`,
                    },
                  },
                } as ListResponse,
      ],
    ],
    clientMethod: 'updateList',
    parameters: [listTwo.id, listTwo],
    error: false,
    expected: listTwo,
  },
  {
    label: 'delete list',
    requests: [[`/v0.1/bulk/lists/${listOne.id}`, 'DELETE']],
    responses: [[204]],
    clientMethod: 'deleteList',
    parameters: [listOne.id],
    error: false,
    expected: true,
  },
  {
    label: 'clear list by removing all items',
    requests: [[`/v0.1/bulk/lists/${listOne.id}/clear`, 'POST']],
    responses: [[202]],
    clientMethod: 'clearList',
    parameters: [listOne.id],
    error: false,
    expected: true,
  },
];
