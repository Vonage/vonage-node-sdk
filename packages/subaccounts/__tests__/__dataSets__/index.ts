import subAccountTests from './subAccounts';
import transferTests from './transfers';

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
