import { Session, SessionUser } from "../session";

/**
 * A session as its returned from the API
 */
export type SessionResponse = {
  _embedded: {
    /**
     * The matching user for this member.
     */
    user: SessionUser

    /**
     * API Key for the session.
     */
    api_key: string
  }
} & Omit<Session, 'user'>;


