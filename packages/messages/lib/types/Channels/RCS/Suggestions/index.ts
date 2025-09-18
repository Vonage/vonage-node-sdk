import { RCSCreateCalendarEventSuggestionParams } from './RCSCreateCalendarEventSuggestionParams';
import { RCSDialActionSuggestionParams } from './RCSDialActionSuggestionParams';
import { RCSOpenURLSuggestionParams } from './RCSOpenURLSuggestionParams';
import { RCSOpenURLWebviewSuggestionParams } from './RCSOpenURLWebviewSuggestionParams';
import { RCSReplySuggestionParams } from './RCSReplySuggestionParams';
import { RCSShareLocationSuggestionParams } from './RCSShareLocationSuggestionParams';
import { RCSViewLocationSuggestionParams } from './RCSViewLocationSuggestionParams';

export * from './RCSCreateCalendarEventSuggestionParams';
export * from './RCSDialActionSuggestionParams';
export * from './RCSOpenURLSuggestionParams';
export * from './RCSOpenURLWebviewSuggestionParams';
export * from './RCSReplySuggestionParams';
export * from './RCSShareLocationSuggestionParams';
export * from './RCSSuggestionParams';
export * from './RCSViewLocationSuggestionParams';

export type AnyRCSSuggestion = RCSCreateCalendarEventSuggestionParams
  | RCSDialActionSuggestionParams
  | RCSOpenURLSuggestionParams
  | RCSOpenURLWebviewSuggestionParams
  | RCSReplySuggestionParams
  | RCSShareLocationSuggestionParams
  | RCSViewLocationSuggestionParams;
