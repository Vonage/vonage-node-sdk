import { RCSCreateCalendarEventSuggestionParams } from './RCSCreateCalendarEventSuggestionParams.js';
import { RCSDialActionSuggestionParams } from './RCSDialActionSuggestionParams.js';
import { RCSOpenURLSuggestionParams } from './RCSOpenURLSuggestionParams.js';
import { RCSOpenURLWebviewSuggestionParams } from './RCSOpenURLWebviewSuggestionParams.js';
import { RCSReplySuggestionParams } from './RCSReplySuggestionParams.js';
import { RCSShareLocationSuggestionParams } from './RCSShareLocationSuggestionParams.js';
import { RCSViewLocationSuggestionParams } from './RCSViewLocationSuggestionParams.js';

export * from './RCSCreateCalendarEventSuggestionParams.js';
export * from './RCSDialActionSuggestionParams.js';
export * from './RCSOpenURLSuggestionParams.js';
export * from './RCSOpenURLWebviewSuggestionParams.js';
export * from './RCSReplySuggestionParams.js';
export * from './RCSShareLocationSuggestionParams.js';
export * from './RCSSuggestionParams.js';
export * from './RCSViewLocationSuggestionParams.js';

export type AnyRCSSuggestion = RCSCreateCalendarEventSuggestionParams
  | RCSDialActionSuggestionParams
  | RCSOpenURLSuggestionParams
  | RCSOpenURLWebviewSuggestionParams
  | RCSReplySuggestionParams
  | RCSShareLocationSuggestionParams
  | RCSViewLocationSuggestionParams;
