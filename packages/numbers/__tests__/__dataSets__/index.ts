import buyNumbers from './buyNumbers';
import getOwnedNumbers from './getOwnedNumbers';
import searchNumbers from './search';
import cancelNumbers from './cancel';
import updateNumbers from './update';

export default [
  {
    label: 'Buying Numbers',
    tests: buyNumbers,
  },
  {
    label: 'Get Owned Numbers',
    tests: getOwnedNumbers,
  },
  {
    label: 'Get Available Numbers',
    tests: searchNumbers,
  },
  {
    label: 'Cancel Numbers',
    tests: cancelNumbers,
  },
  {
    label: 'Update numbers',
    tests: updateNumbers,
  },
];
