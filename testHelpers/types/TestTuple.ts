import { SDKTestCase } from './SDKTestCase';

export type TestTuple = [
  {tests: Array<SDKTestCase>},
  string | number | boolean,
  boolean,
];

