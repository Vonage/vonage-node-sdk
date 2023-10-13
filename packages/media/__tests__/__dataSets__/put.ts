export default [
  {
    label: 'update media item',
    requests: [
      [
        '/v3/media/00000000-0000-0000-0000-000000000000',
        'PUT',
        {
          public: false,
          metadata_primary: 'fizz',
          metadata_secondary: 'buzz',
          title: 'foo',
          description: 'bar',
          mime_type: 'audio/vnd.wave',
          max_downloads_allowed: 42,
        },
      ],
    ],
    responses: [[204]],
    clientMethod: 'updateMediaItem',
    parameters: [
      {
        id: '00000000-0000-0000-0000-000000000000',
        title: 'foo',
        description: 'bar',
        originalFileName: 'test.wav',
        mimeType: 'audio/vnd.wave',
        accountId: 'my_account',
        storeId: 's3',
        maxDownloadsAllowed: 42,
        timesDownloaded: 0,
        etag: '00000000000000000000000000000000',
        mediaSize: 1234567,
        timeCreated: '2020-01-01T14:00:00.000Z',
        timeLastUpdated: '2020-01-01T14:00:00.000Z',
        public: false,
        metadataPrimary: 'fizz',
        metadataSecondary: 'buzz',
      },
    ],
    expected: undefined,
  },
];
