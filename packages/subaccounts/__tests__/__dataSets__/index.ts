import subAccountTests from './subAccounts.js';
import transferTests from './transfers.js';

export default [
  {
    label: 'Sub Account Tests',
    tests: subAccountTests,
  },
  {
    label: 'Transfer Tests',
    tests: transferTests,
  },
];
