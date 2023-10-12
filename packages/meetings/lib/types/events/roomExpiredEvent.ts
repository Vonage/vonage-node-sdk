import { EventType, MeetingType } from '../../enums';

/**
 * Represents an event for a room expiration.
 *
 * @remarks
 * The SDK does not have any functionality for process incoming webhook events.
 * The types are provided here to help with code completion and TS Compiling
 */
export type RoomExpired = {
  /**
   * The type of event, which is 'room:expired'.
   */
  event: EventType.ROOM_EXPIRED;

  /**
   * The unique identifier for the room.
   */
  room_id: string;

  /**
   * The type of meeting associated with the room.
   */
  room_type: MeetingType;

  /**
   * The date and time when the room will expire, expressed in ISO 8601 format.
   * The value must be greater than 10 minutes from now.
   */
  expires_at: string;

  /**
   * The date and time when the room was created, expressed in ISO 8601 format.
   */
  created_at: string;
}

/**
 * @deprecated Exported as interface in error. Please use RoomExpired
 */
export interface RoomExpiredInterface extends RoomExpired {}
