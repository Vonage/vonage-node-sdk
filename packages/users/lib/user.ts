import { AuthenticationType, Client } from '@vonage/server-client';
import {
  UserListParameters,
  UserPageResponse,
  UserResponse,
  UserType,
  WebSocketChannelRequest,
  WebSocketChannelResponse,
  WebsocketChannel,
} from './types/index.js';

const apiUserToUser = (apiUser: UserResponse): UserType => {
  delete apiUser._links;

  const user = Client.transformers.camelCaseObjectKeys(
    apiUser,
    true,
  ) as UserType;

  if (user.properties) {
    user.properties.customData = apiUser.properties.custom_data;
  }

  if (user.channels?.websocket) {
    user.channels.websocket = apiUser.channels.websocket.map(
      (apiSocket: WebSocketChannelResponse): WebsocketChannel => {
        const socket = {
          uri: apiSocket.uri,
        } as WebsocketChannel;

        if (apiSocket['content-type']) {
          socket.contentType = apiSocket['content-type'];
        }

        if (apiSocket.headers) {
          socket.headers = apiSocket.headers;
        }

        return socket;
      },
    );
  }

  return user as UserType;
};

const userToAPI = (user: UserType): UserResponse => {
  const apiUser = Client.transformers.snakeCaseObjectKeys(
    user,
    true,
  ) as UserResponse;

  // preserve user properties
  if (user.properties?.customData) {
    apiUser.properties.custom_data = user.properties.customData;
  }

  // Websockets will change when transformed
  if (user.channels?.websocket) {
    apiUser.channels.websocket = user.channels.websocket?.map(
      (socket: WebsocketChannel): WebSocketChannelRequest => {
        const apiSocket = {
          uri: socket.uri,
        } as WebSocketChannelRequest;

        // restore content type
        if (socket.contentType) {
          apiSocket['content-type'] = socket.contentType;
        }

        // preserve headers
        if (socket.headers) {
          apiSocket.headers = socket.headers;
        }

        return apiSocket;
      },
    );
  }

  delete apiUser.id;

  return apiUser as UserResponse;
};

/**
 * The `Users` class provides methods for managing user data through API requests.
 *
 * Vonage API responses and requests use `snake_case` for property names, but
 * this class performs the necessary key transformations to work with
 * `camelCase` property names in your application.
 */
export class Users extends Client {
  protected authType = AuthenticationType.JWT;

  /**
   * Retrieves a list of users, optionally paginated, based on the provided parameters.
   *
   * @param {UserListParameters} params - Optional parameters to filter and paginate the list of users.
   * @return {AsyncGenerator<UserType, void, undefined>} An async generator that yields user objects.
   */
  async *listAllUsers(
    params: UserListParameters = {},
  ): AsyncGenerator<UserType, void & UserType, undefined> {
    let cursor = params.cursor;
    do {
      if (cursor) {
        params.cursor = cursor;
      }
      const resp = await this.getUserPage(params);

      yield* resp._embedded?.users.map(apiUserToUser);
      const next = resp._links?.next?.href
        ? new URL(resp._links.next.href)
        : null;

      cursor = next ? `${next.searchParams.get('cursor')}` : undefined;
    } while (cursor);
  }

  /**
   * Retrieves a page of users based on the provided parameters, such as pagination and filtering.
   *
   * @param {UserListParameters} [params={}] - Optional parameters to filter and paginate the list of users.
   * @param {number} [params.pageSize] - The number of users to include per page.
   * @param {SortOrder} [params.order] - The sorting order for the list (ASC or DESC).
   * @param {string} [params.cursor] - A cursor for paginating through the user list.
   * @param {string} [params.name] - A name to filter users by.
   *
   * @return {Promise<UserPageResponse>} A Promise that resolves to a UserPageResponse object containing the user page data.
   *
   * @throws {Error} If there is an issue with the request or response.
   */
  async getUserPage(
    params: UserListParameters = {},
  ): Promise<UserPageResponse> {
    const resp = await this.sendGetRequest<UserPageResponse>(
      `${this.config.apiHost}/v1/users`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return resp.data;
  }

  /**
   * Creates a new user with the provided user data.
   *
   * @param {UserType} user - The user data to create a new user.
   * @return {Promise<UserType>} A Promise that resolves to the newly created user.
   * @throws {Error} If there is an issue with the request or response.
   */
  async createUser(user: UserType): Promise<UserType> {
    const resp = await this.sendPostRequest<UserResponse>(
      `${this.config.apiHost}/v1/users`,
      userToAPI(user),
    );

    return apiUserToUser(resp.data);
  }

  /**
   * Retrieves user information for the specified user ID.
   *
   * @param {string} userId - The unique identifier of the user to retrieve.
   * @return {Promise<UserType>} A Promise that resolves to the user information for the specified user ID.
   * @throws {Error} If there is an issue with the request or response, or if the user with the specified ID is not found.
   */
  async getUser(userId: string): Promise<UserType> {
    const resp = await this.sendGetRequest<UserResponse>(
      `${this.config.apiHost}/v1/users/${userId}`,
    );

    return apiUserToUser(resp.data);
  }

  /**
   * Updates the user information for the specified user.
   *
   * @param {UserType} user - The user object containing the updated information.
   * @return {Promise<UserType>} A Promise that resolves to the updated user information.
   * @throws {Error} If there is an issue with the request or response, or if the user with the specified ID is not found.
   */
  async updateUser(user: UserType): Promise<UserType> {
    const resp = await this.sendPatchRequest<UserResponse>(
      `${this.config.apiHost}/v1/users/${user.id}`,
      userToAPI(user),
    );

    return apiUserToUser(resp.data);
  }

  /**
   * Deletes the user with the specified user ID.
   *
   * @param {string} userId - The unique ID of the user to be deleted.
   * @return {Promise<void>} A Promise that resolves once the user is successfully deleted.
   * @throws {Error} If there is an issue with the request or response, or if the user with the specified ID is not found.
   */
  async deleteUser(userId: string): Promise<void> {
    await this.sendDeleteRequest<UserResponse>(
      `${this.config.apiHost}/v1/users/${userId}`,
    );
  }
}
