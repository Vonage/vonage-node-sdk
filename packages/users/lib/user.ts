import { AuthenticationType, Client } from '@vonage/server-client';
import {
  UserListParameters,
  UserPageResponse,
  UserResponse,
  UserType,
  WebSocketChannelRequest,
  WebSocketChannelResponse,
  WebsocketChannel,
} from './types';

const apiUserToUser = (apiUser: UserResponse): UserType => {
  const user = Client.transformers.camelCaseObjectKeys(apiUser, true);

  delete user.links;
  delete user.properties?.customData;
  if (apiUser.properties) {
    user.properties.customData = apiUser.properties?.custom_data;
  }

  if (apiUser?.channels?.websocket) {
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
  const apiUser = Client.transformers.snakeCaseObjectKeys(user, true);
  // preserve user properties
  if (apiUser.properties?.custom_data) {
    apiUser.properties.custom_data = user.properties?.customData;
  }

  // Websockets will change when transformed
  if (apiUser.channels?.websocket) {
    apiUser.channels.websocket = user.channels?.websocket?.map(
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
 *
 * @public
 * @class
 */
export class Users extends Client {
  public authType = AuthenticationType.JWT;

  /**
   * Retrieves a list of users, optionally paginated, based on the provided parameters.
   *
   * @public
   * @async
   * @generator
   *
   * @param {UserListParameters} [params={}] - Optional parameters to filter and paginate the list of users.
   * @param {number} [params.pageSize] - The number of users to include per page.
   * @param {SortOrder} [params.order] - The sorting order for the list (ASC or DESC).
   * @param {string} [params.cursor] - A cursor for paginating through the user list.
   * @param {string} [params.name] - A name to filter users by.
   *
   * @returns {AsyncGenerator<UserType, void & UserType, undefined>} An async generator that yields user objects.
   *
   * @example
   * const userListParams = {
   *   pageSize: 10,
   *   order: SortOrder.ASC,
   *   cursor: 'abc123',
   *   name: 'John Doe',
   * };
   *
   * for await (const user of users.listAllUsers(userListParams)) {
   *   console.log(user.name);
   * }
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
   * @public
   * @async
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
   *
   * @example
   * const userListParams = {
   *   pageSize: 10,
   *   order: SortOrder.ASC,
   *   cursor: 'abc123',
   *   name: 'John Doe',
   * };
   *
   * const userPage = await users.getUserPage(userListParams);
   * console.log(userPage._embedded.users);
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
   * @public
   * @async
   *
   * @param {UserType} user - The user data to create a new user.
   *
   * @return {Promise<UserType>} A Promise that resolves to the newly created user.
   *
   * @throws {Error} If there is an issue with the request or response.
   *
   * @example
   * const newUser = {
   *   name: 'John Doe',
   *   properties: {
   *     customData: {
   *       age: '30',
   *       city: 'New York',
   *     },
   *   },
   *   channels: {
   *     sms: [
   *       { number: '+1234567890' },
   *     ],
   *   },
   * };
   *
   * const createdUser = await users.createUser(newUser);
   * console.log(createdUser.name); // 'John Doe'
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
   * @public
   * @async
   *
   * @param {string} userId - The unique identifier of the user to retrieve.
   *
   * @return {Promise<UserType>} A Promise that resolves to the user information for the specified user ID.
   *
   * @throws {Error} If there is an issue with the request or response, or if the user with the specified ID is not found.
   *
   * @example
   * const userId = '12345';
   * const user = await users.getUser(userId);
   * console.log(user.name); // 'John Doe'
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
   * @public
   * @async
   *
   * @param {UserType} user - The user object containing the updated information.
   *
   * @return {Promise<UserType>} A Promise that resolves to the updated user information.
   *
   * @throws {Error} If there is an issue with the request or response, or if the user with the specified ID is not found.
   *
   * @example
   * const updatedUser = {
   *   id: '12345',
   *   name: 'Updated Name',
   *   // ... Other updated user properties
   * };
   * const user = await users.updateUser(updatedUser);
   * console.log(user.name); // 'Updated Name'
   */
  async updateUser(user: UserType): Promise<UserType> {
    const resp = await this.sendPutRequest<UserResponse>(
      `${this.config.apiHost}/v1/users/${user.id}`,
      userToAPI(user),
    );

    return apiUserToUser(resp.data);
  }

  /**
   * Deletes the user with the specified user ID.
   *
   * @public
   * @async
   *
   * @param {string} userId - The unique ID of the user to be deleted.
   *
   * @return {Promise<void>} A Promise that resolves once the user is successfully deleted.
   *
   * @throws {Error} If there is an issue with the request or response, or if the user with the specified ID is not found.
   *
   * @example
   * const userIdToDelete = '12345';
   * await users.deleteUser(userIdToDelete);
   * console.log(`User with ID ${userIdToDelete} has been deleted.`);
   */
  async deleteUser(userId: string): Promise<void> {
    await this.sendDeleteRequest<UserResponse>(
      `${this.config.apiHost}/v1/users/${userId}`,
    );
  }
}
