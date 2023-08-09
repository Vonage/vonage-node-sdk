import { AuthenticationType, Client } from '@vonage/server-client';
import {
  UserListParameters,
  UserPageResponse,
  UserResponse,
  UserType,
  WebSocketChannelRequest,
  WebSocketChannelResponse,
  WebsocketChannel,
} from './types/index';

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

  return user;
};

const userToAPI = (user: UserType): UserResponse => {
  const apiUser = Client.transformers.snakeCaseObjectKeys(user, true);
  // preserve user properties
  if (apiUser.properties?.custom_data) {
    apiUser.properties.custom_data = user.properties.customData;
  }

  // Websockets will change when transformed
  if (apiUser.channels?.websocket) {
    apiUser.channels.websocket = user.channels.websocket.map(
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

  return apiUser;
};

export class User extends Client {
  protected authType = AuthenticationType.JWT;

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

      cursor = next ? next.searchParams.get('cursor') : null;
    } while (cursor);
  }

  async getUserPage(
    params: UserListParameters = {},
  ): Promise<UserPageResponse> {
    const resp = await this.sendGetRequest<UserPageResponse>(
      `${this.config.apiHost}/v1/users`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return resp.data;
  }

  async createUser(user: UserType): Promise<UserType> {
    const resp = await this.sendPostRequest<UserResponse>(
      `${this.config.apiHost}/v1/users`,
      userToAPI(user),
    );

    return apiUserToUser(resp.data);
  }

  async getUser(userId: string): Promise<UserType> {
    const resp = await this.sendGetRequest<UserResponse>(
      `${this.config.apiHost}/v1/users/${userId}`,
    );

    return apiUserToUser(resp.data);
  }

  async updateUser(user: UserType): Promise<UserType> {
    const resp = await this.sendPutRequest<UserResponse>(
      `${this.config.apiHost}/v1/users/${user.id}`,
      userToAPI(user),
    );

    return apiUserToUser(resp.data);
  }

  async deleteUser(userId: string): Promise<void> {
    await this.sendDeleteRequest<UserResponse>(
      `${this.config.apiHost}/v1/users/${userId}`,
    );
  }
}
