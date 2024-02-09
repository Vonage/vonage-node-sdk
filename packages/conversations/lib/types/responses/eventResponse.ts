import { APILinks } from '@vonage/server-client';
import { AnyMessageBody } from '../anyMessageBody';
import { Event } from '../event';
import { EventUser } from '../eventUser';

type SnakeToCamelCase<Key extends string> = Key extends `${infer FirstPart}_${infer FirstLetter}${infer LastPart}`
  ? `${FirstPart}${Uppercase<FirstLetter>}${SnakeToCamelCase<LastPart>}`
  : Key;

export type EventUserResponse = {
  display_name: string
} & Omit<EventUser, 'displayName'>;

export type AnyMessageBodyResponse = {
  [P in keyof AnyMessageBody as SnakeToCamelCase<P>]: AnyMessageBody[P];
}

export type EventResponse = {
  body: AnyMessageBodyResponse;

  _embedded: {
    from_user: EventUserResponse;

    from_member: {
      id: string;
    }
  }
} & Omit<Event, 'fromUser' | 'body' | 'fromMember'> & APILinks;
