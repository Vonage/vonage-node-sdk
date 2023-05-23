import { testApplication } from '../common';

export default [
  {
    label: 'delete simple application',
    requests: [[`/v2/applications/${testApplication.id}`, 'DELETE']],
    responses: [[204]],
    clientMethod: 'deleteApplication',
    parameters: [testApplication.id],
    generator: false,
    error: false,
    expected: undefined,
  },
];
