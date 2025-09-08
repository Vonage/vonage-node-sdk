import { AnyMessageBodyResponse } from '../responses/index.js';
import { Event } from '../event.js';

export type CreateEventRequest = {
  body: AnyMessageBodyResponse
} & Pick<Event, 'type' | 'from'>;
