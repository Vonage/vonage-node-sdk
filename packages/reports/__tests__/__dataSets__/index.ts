import getRecordsTests from './getRecords/index.js';
import createReportTests from './createReport.js';
import getReportTests from './getReport.js';
import cancelReportTests from './cancelReport.js';

export default [
  { label: 'Get Records', tests: getRecordsTests },
  { label: 'Create Report', tests: createReportTests },
  { label: 'Get Report', tests: getReportTests },
  { label: 'Cancel Report', tests: cancelReportTests },
];
