export default [
  {
    label: 'delete media item',
    requests: [['/v3/media/00000000-0000-0000-0000-000000000000', 'DELETE']],
    responses: [[204]],
    clientMethod: 'deleteMediaItem',
    parameters: ['00000000-0000-0000-0000-000000000000'],
    expected: undefined,
  },
];
