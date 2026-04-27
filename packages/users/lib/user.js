import { AuthenticationType, Client } from '@vonage/server-client';

const apiUserToUser = (apiUser) => {
  delete apiUser._links;

  const user = Client.transformers.camelCaseObjectKeys(
    apiUser,
    true
  );

  if (user.properties) {
    user.properties.customData = apiUser.properties.custom_data;
  }

  if (user.channels?.websocket) {
    user.channels.websocket = apiUser.channels.websocket.map(
      (apiSocket) => {
        const socket = {
          uri: apiSocket.uri
        };

        if (apiSocket['content-type']) {
          socket.contentType = apiSocket['content-type'];
        }

        if (apiSocket.headers) {
          socket.headers = apiSocket.headers;
        }

        return socket;
      }
    );
  }

  return user;
};

const userToAPI = (user) => {
  const apiUser = Client.transformers.snakeCaseObjectKeys(
    user,
    true
  );

  // preserve user properties
  if (user.properties?.customData) {
    apiUser.properties.custom_data = user.properties.customData;
  }

  // Websockets will change when transformed
  if (user.channels?.websocket) {
    apiUser.channels.websocket = user.channels.websocket?.map(
      (socket) => {
        const apiSocket = {
          uri: socket.uri
        };

        // restore content type
        if (socket.contentType) {
          apiSocket['content-type'] = socket.contentType;
        }

        // preserve headers
        if (socket.headers) {
          apiSocket.headers = socket.headers;
        }

        return apiSocket;
      }
    );
  }

  delete apiUser.id;

  return apiUser;
};

/**
 * The `Users` class provides methods for managing user data through API requests.
 *
 * Vonage API responses and requests use `snake_case` for property names, but
 * this class performs the necessary key transformations to work with
 * `camelCase` property names in your application.
 */
export class Users extends Client {
  authType = AuthenticationType.JWT;

  /**
   * Retrieves a list of users, optionally paginated, based on the provided parameters.
   *
   * @param {UserListParameters} params - Optional parameters to filter and paginate the list of users.
   * @return {AsyncGenerator<UserType, void, undefined>} An async generator that yields user objects.
   */
  async *listAllUsers(
  params = {})
  {
    let cursor = params.cursor;
    do {
      if (cursor) {
        params.cursor = cursor;
      }
      const resp = await this.getUserPage(params);

      yield* resp._embedded?.users.map(apiUserToUser);
      const next = resp._links?.next?.href ?
      new URL(resp._links.next.href) :
      null;

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
  params = {})
  {
    const resp = await this.sendGetRequest(
      `${this.config.apiHost}/v1/users`,
      Client.transformers.snakeCaseObjectKeys(params, true)
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
  async createUser(user) {
    const resp = await this.sendPostRequest(
      `${this.config.apiHost}/v1/users`,
      userToAPI(user)
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
  async getUser(userId) {
    const resp = await this.sendGetRequest(
      `${this.config.apiHost}/v1/users/${userId}`
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
  async updateUser(user) {
    const resp = await this.sendPatchRequest(
      `${this.config.apiHost}/v1/users/${user.id}`,
      userToAPI(user)
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
  async deleteUser(userId) {
    await this.sendDeleteRequest(
      `${this.config.apiHost}/v1/users/${userId}`
    );
  }
}
