import { AnyMessageBodyResponse } from '../responses';
import { Event } from '../event';

export type CreateEventRequest = {
  body: AnyMessageBodyResponse
} & Pick<Event, 'type' | 'from'>;
