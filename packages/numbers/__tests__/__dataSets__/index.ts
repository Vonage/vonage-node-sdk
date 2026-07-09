import buyNumbers from './buyNumbers.js';
import getOwnedNumbers from './getOwnedNumbers.js';
import searchNumbers from './search.js';
import cancelNumbers from './cancel.js';
import updateNumbers from './update.js';

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
