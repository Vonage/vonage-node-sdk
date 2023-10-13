import {
  MediaItem,
  MediaItemResponse,
  MediaItemPageResponse,
  MediaParameters,
} from '../../lib/types';

export default [
  {
    label: 'get media item',
    requests: [['/v3/media/00000000-0000-0000-0000-000000000000/info', 'GET']],
    responses: [
      [
        200,
        {
          id: '00000000-0000-0000-0000-000000000000',
          original_file_name: 'test.wav',
          mime_type: 'audio/vnd.wave',
          account_id: 'my_account',
          store_id: 's3',
          max_downloads_allowed: 0,
          times_downloaded: 0,
          etag: '00000000000000000000000000000000',
          media_size: 1234567,
          time_created: '2020-01-01T14:00:00.000Z',
          time_last_updated: '2020-01-01T14:00:00.000Z',
          public: false,
          metadata_primary: null,
          metadata_secondary: null,
        } as MediaItemResponse,
      ],
    ],
    clientMethod: 'getMediaItem',
    parameters: ['00000000-0000-0000-0000-000000000000'],
    expected: {
      id: '00000000-0000-0000-0000-000000000000',
      originalFileName: 'test.wav',
      mimeType: 'audio/vnd.wave',
      accountId: 'my_account',
      storeId: 's3',
      maxDownloadsAllowed: 0,
      timesDownloaded: 0,
      etag: '00000000000000000000000000000000',
      mediaSize: 1234567,
      timeCreated: '2020-01-01T14:00:00.000Z',
      timeLastUpdated: '2020-01-01T14:00:00.000Z',
      public: false,
      metadataPrimary: null,
      metadataSecondary: null,
    } as MediaItem,
  },
  {
    label: 'get one page of media items',
    requests: [['/v3/media?', 'GET']],
    responses: [
      [
        200,
        {
          page_size: 20,
          page_index: 0,
          _links: {
            self: {
              href: `/v3/media?page_size=20&order=descending`,
            },
            first: {
              href: `/v3/media?page_size=20&order=descending`,
            },
            last: {
              href: `/v3/media?page_size=20&order=descending`,
            },
          },
          count: 1,
          _embedded: {
            media: [
              {
                id: '00000000-0000-0000-0000-000000000000',
                original_file_name: 'test.wav',
                mime_type: 'audio/vnd.wave',
                account_id: 'my_account',
                store_id: 's3',
                max_downloads_allowed: 0,
                times_downloaded: 0,
                etag: '00000000000000000000000000000000',
                media_size: 1234567,
                time_created: '2020-01-01T14:00:00.000Z',
                time_last_updated: '2020-01-01T14:00:00.000Z',
                public: false,
                metadata_primary: null,
                metadata_secondary: null,
              } as MediaItemResponse,
            ],
          },
        } as MediaItemPageResponse,
      ],
    ],
    clientMethod: 'getMediaPage',
    parameters: [],
    expected: {
      page_size: 20,
      page_index: 0,
      _links: {
        self: {
          href: `/v3/media?page_size=20&order=descending`,
        },
        first: {
          href: `/v3/media?page_size=20&order=descending`,
        },
        last: {
          href: `/v3/media?page_size=20&order=descending`,
        },
      },
      count: 1,
      _embedded: {
        media: [
          {
            id: '00000000-0000-0000-0000-000000000000',
            original_file_name: 'test.wav',
            mime_type: 'audio/vnd.wave',
            account_id: 'my_account',
            store_id: 's3',
            max_downloads_allowed: 0,
            times_downloaded: 0,
            etag: '00000000000000000000000000000000',
            media_size: 1234567,
            time_created: '2020-01-01T14:00:00.000Z',
            time_last_updated: '2020-01-01T14:00:00.000Z',
            public: false,
            metadata_primary: null,
            metadata_secondary: null,
          } as MediaItemResponse,
        ],
      },
    },
  },
  {
    label: 'get page of data with query parameters',
    requests: [
      [
        `/v3/media?order=descending&page_index=42&page_size=10&start_time=2020-01-01T14:00:00.000Z&end_time=2020-01-01T14:00:00.000Z`,
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          page_size: 20,
          page_index: 0,
          _links: {
            self: {
              href: `/v3/media?page_size=20&order=descending`,
            },
            first: {
              href: `/v3/media?page_size=20&order=descending`,
            },
            last: {
              href: `/v3/media?page_size=20&order=descending`,
            },
          },
          count: 1,
          _embedded: {
            media: [
              {
                id: '00000000-0000-0000-0000-000000000000',
                original_file_name: 'test.wav',
                mime_type: 'audio/vnd.wave',
                account_id: 'my_account',
                store_id: 's3',
                max_downloads_allowed: 0,
                times_downloaded: 0,
                etag: '00000000000000000000000000000000',
                media_size: 1234567,
                time_created: '2020-01-01T14:00:00.000Z',
                time_last_updated: '2020-01-01T14:00:00.000Z',
                public: false,
                metadata_primary: null,
                metadata_secondary: null,
              } as MediaItemResponse,
            ],
          },
        } as MediaItemPageResponse,
      ],
    ],
    clientMethod: 'getMediaPage',
    parameters: [
      {
        order: 'descending',
        pageIndex: 42,
        pageSize: 10,
        startTime: '2020-01-01T14:00:00.000Z',
        endTime: '2020-01-01T14:00:00.000Z',
      } as MediaParameters,
    ],
    expected: {
      page_size: 20,
      page_index: 0,
      _links: {
        self: {
          href: `/v3/media?page_size=20&order=descending`,
        },
        first: {
          href: `/v3/media?page_size=20&order=descending`,
        },
        last: {
          href: `/v3/media?page_size=20&order=descending`,
        },
      },
      count: 1,
      _embedded: {
        media: [
          {
            id: '00000000-0000-0000-0000-000000000000',
            original_file_name: 'test.wav',
            mime_type: 'audio/vnd.wave',
            account_id: 'my_account',
            store_id: 's3',
            max_downloads_allowed: 0,
            times_downloaded: 0,
            etag: '00000000000000000000000000000000',
            media_size: 1234567,
            time_created: '2020-01-01T14:00:00.000Z',
            time_last_updated: '2020-01-01T14:00:00.000Z',
            public: false,
            metadata_primary: null,
            metadata_secondary: null,
          } as MediaItemResponse,
        ],
      },
    },
  },
  {
    label: 'get multiple pages using generator',
    requests: [
      ['/v3/media?page_index=0', 'GET'],
      [`/v3/media?page_index=1`, 'GET'],
    ],
    responses: [
      [
        200,
        {
          page_size: 20,
          page_index: 0,
          _links: {
            self: {
              href: `/v3/media?page_index=0&page_size=20&order=descending`,
            },
            first: {
              href: `/v3/media?page_index=0&page_size=20&order=descending`,
            },
            next: {
              href: `/v3/media?page_index=1&page_size=20&order=descending`,
            },
            last: {
              href: `/v3/media?page_index=1&page_size=20&order=descending`,
            },
          },
          count: 2,
          _embedded: {
            media: [
              {
                id: '00000000-0000-0000-0000-000000000000',
                original_file_name: 'test.wav',
                mime_type: 'audio/vnd.wave',
                account_id: 'my_account',
                store_id: 's3',
                max_downloads_allowed: 0,
                times_downloaded: 0,
                etag: '00000000000000000000000000000000',
                media_size: 1234567,
                time_created: '2020-01-01T14:00:00.000Z',
                time_last_updated: '2020-01-01T14:00:00.000Z',
                public: false,
                metadata_primary: null,
                metadata_secondary: null,
              } as MediaItemResponse,
            ],
          },
        } as MediaItemPageResponse,
      ],
      [
        200,
        {
          page_size: 20,
          page_index: 1,
          _links: {
            self: {
              href: `/v3/media?page_index=0&page_size=20&order=descending`,
            },
            first: {
              href: `/v3/media?page_index=0&page_size=20&order=descending`,
            },
            prev: {
              href: `/v3/media?page_index=0&page_size=20&order=descending`,
            },
            last: {
              href: `/v3/media?page_index=1&page_size=20&order=descending`,
            },
          },
          count: 2,
          _embedded: {
            media: [
              {
                id: '00000000-0000-0000-0000-000000000001',
                original_file_name: 'test.wav',
                mime_type: 'audio/vnd.wave',
                account_id: 'my_account',
                store_id: 's3',
                max_downloads_allowed: 0,
                times_downloaded: 0,
                etag: '00000000000000000000000000000000',
                media_size: 1234567,
                time_created: '2020-01-01T14:00:00.000Z',
                time_last_updated: '2020-01-01T14:00:00.000Z',
                public: false,
                metadata_primary: null,
                metadata_secondary: null,
              } as MediaItemResponse,
            ],
          },
        } as MediaItemPageResponse,
      ],
    ],
    clientMethod: 'listAllMediaItems',
    parameters: [],
    generator: true,
    expected: [
      {
        id: '00000000-0000-0000-0000-000000000000',
        originalFileName: 'test.wav',
        mimeType: 'audio/vnd.wave',
        accountId: 'my_account',
        storeId: 's3',
        maxDownloadsAllowed: 0,
        timesDownloaded: 0,
        etag: '00000000000000000000000000000000',
        mediaSize: 1234567,
        timeCreated: '2020-01-01T14:00:00.000Z',
        timeLastUpdated: '2020-01-01T14:00:00.000Z',
        public: false,
        metadataPrimary: null,
        metadataSecondary: null,
      },
      {
        id: '00000000-0000-0000-0000-000000000001',
        originalFileName: 'test.wav',
        mimeType: 'audio/vnd.wave',
        accountId: 'my_account',
        storeId: 's3',
        maxDownloadsAllowed: 0,
        timesDownloaded: 0,
        etag: '00000000000000000000000000000000',
        mediaSize: 1234567,
        timeCreated: '2020-01-01T14:00:00.000Z',
        timeLastUpdated: '2020-01-01T14:00:00.000Z',
        public: false,
        metadataPrimary: null,
        metadataSecondary: null,
      },
    ],
  },
];
