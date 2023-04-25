import { BASE_URL } from '../common';
import { Client } from '@vonage/server-client';
import {
  ListItemPageResponse,
  ListItem,
  ListItemResponse,
} from '../../lib/types';

type TestDataType = {
    phone: string
    message: string
}

const itemOne = {
  id: '00000000-0000-0000-0000-000000000001',
  listId: '10000000-0000-0000-0000-000000000000',
  createdAt: '2023-04-20T15:23:10.169Z',
  updatedAt: '2023-04-20T15:23:10.169Z',
  data: {
    phone: '19162255887',
    message: "I'll always dial the 'K' for you.",
  },
} as ListItem<TestDataType>;

const itemTwo = {
  id: '00000000-0000-0000-0000-000000000002',
  listId: '10000000-0000-0000-0000-000000000000',
  createdAt: '2023-04-20T15:23:10.169Z',
  updatedAt: '2023-04-20T15:23:10.169Z',
  data: {
    phone: '17167762323',
    message: 'Since when does anyone have a clue about what they want?',
  },
} as ListItem<TestDataType>;

const itemThree = {
  id: '00000000-0000-0000-0000-000000000003',
  listId: '10000000-0000-0000-0000-000000000000',
  createdAt: '2023-04-20T15:23:10.169Z',
  updatedAt: '2023-04-20T15:23:10.169Z',
  data: {
    phone: '14152739164',
    message: 'Too many secrets',
  },
} as ListItem<TestDataType>;

export default [
  {
    label: 'find all list items',
    requests: [
      [`/v0.1/bulk/lists/${itemOne.listId}/items?page=1`, 'GET'],
      [`/v0.1/bulk/lists/${itemOne.listId}/items?page=2`, 'GET'],
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
                    items: [
                      {
                        ...Client.transformers.snakeCaseObjectKeys(
                          itemOne,
                        ),
                        _links: {
                          self: {
                            href: `${BASE_URL}/v0.1/bulk/lists/${itemOne.listId}/items/${itemOne.id}`,
                          },
                        },
                      },
                      {
                        ...Client.transformers.snakeCaseObjectKeys(
                          itemTwo,
                        ),
                        _links: {
                          self: {
                            href: `${BASE_URL}/v0.1/bulk/lists/${itemTwo.listId}/items/${itemTwo.id}`,
                          },
                        },
                      },
                    ],
                  },
                  _links: {
                    next: {
                      href: `${BASE_URL}/v0.1/bulk/lists/${itemOne.listId}/items?page_size=1&order=asc&page=2`,
                    },
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists/${itemOne.listId}/items?page_size=1&order=asc&page=1`,
                    },
                  },
                } as ListItemPageResponse<TestDataType>,
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
                    items: [
                      {
                        ...Client.transformers.snakeCaseObjectKeys(
                          itemThree,
                        ),
                        _links: {
                          self: {
                            href: `${BASE_URL}/v0.1/bulk/lists/${itemOne.listId}/items/${itemThree.id}`,
                          },
                        },
                      },
                    ],
                  },
                  _links: {
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists/${itemOne.listId}/items?page_size=1&order=asc&page=2`,
                    },
                  },
                } as ListItemPageResponse<TestDataType>,
      ],
    ],
    clientMethod: 'findAllListItems',
    parameters: [itemOne.listId],
    generator: true,
    error: false,
    expected: [itemOne, itemTwo, itemThree],
  },
  {
    label: 'create item',
    requests: [
      [
        `/v0.1/bulk/lists`,
        'POST',
        {
          data: itemOne.data,
        },
      ],
    ],
    responses: [
      [
        202,
                {
                  ...Client.transformers.snakeCaseObjectKeys(itemOne),
                  _links: {
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists/${itemOne.listId}/items/${itemOne.id}`,
                    },
                  },
                } as ListItemResponse<TestDataType>,
      ],
    ],
    clientMethod: 'createListItem',
    parameters: [itemOne.listId, itemOne],
    error: false,
    expected: itemOne,
  },
  {
    label: 'get item by id',
    requests: [
      [`/v0.1/bulk/lists/${itemOne.listId}/items/${itemOne.id}`, 'GET'],
    ],
    responses: [
      [
        200,
                {
                  ...Client.transformers.snakeCaseObjectKeys(itemOne),
                  _links: {
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/${itemOne.listId}/items/${itemOne.id}`,
                    },
                  },
                } as ListItemResponse<TestDataType>,
      ],
    ],
    clientMethod: 'getListItemById',
    parameters: [itemOne.listId, itemOne.id],
    error: false,
    expected: itemOne,
  },
  {
    label: 'update item',
    requests: [
      [
        `/v0.1/bulk/lists/${itemOne.listId}/items/${itemOne.id}`,
        'PUT',
        {
          data: itemOne.data,
        },
      ],
    ],
    responses: [
      [
        200,
                {
                  ...Client.transformers.snakeCaseObjectKeys(itemOne),
                  _links: {
                    self: {
                      href: `${BASE_URL}/v0.1/bulk/lists/${itemOne.listId}/items/${itemOne.id}`,
                    },
                  },
                } as ListItemResponse<TestDataType>,
      ],
    ],
    clientMethod: 'updateListItem',
    parameters: [itemOne.listId, itemOne.id, itemOne],
    error: false,
    expected: itemOne,
  },
  {
    label: 'delete list item',
    requests: [
      [
        `/v0.1/bulk/lists/${itemOne.listId}/items/${itemOne.id}`,
        'DELETE',
      ],
    ],
    responses: [[204]],
    clientMethod: 'deleteListItem',
    parameters: [itemOne.listId, itemOne.id],
    error: false,
    expected: true,
  },
];
