import { AuthenticationType, Client } from '@vonage/server-client';
import {
  ApplicationPageResponse,
  ApplicationResponse,
  Application,
  ListApplicationParams,
  ApplicationPageList,
} from './types';

/**
 * Represents the application with both the `snake_case` and the `camelCase` keys.
 *
 * @remarks
 * This is used for backward compatibility with an earlier release of the SDK
 * which was not transforming the application correctly.
 * Using `snake_case` is considered deprecated
 *
 * @example
 * Create a standalone Application client
 *
 * ```ts
 * import { Applications } from '@vonage/application';
 *
 * const applicationClient = new Applications({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Application client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const applicationClient = vonage.application
 * ```
 */
export type MergedApplication = Application & ApplicationResponse;

const apiToApplication = (
  response: MergedApplication,
): MergedApplication => {
  delete (response as ApplicationResponse)._links;
  return Client.transformers.camelCaseObjectKeys(
    response,
    true,
    true,
  ) as MergedApplication;
};

export class Applications extends Client {
  authType = AuthenticationType.BASIC;

  /**
   * Retrieves a list of applications with optional pagination parameters.
   *
   * @remarks
   * This is used to get a specific page of applications. This will
   * return the `snake_case` and the `camelCase` response. Using `snake_case`
   * is considered deprecated
   *
   * @see API Specification {@link https://developer.vonage.com/en/api/application.v2#listApplication}
   *
   * @param {ListApplicationParams} params - The filter parameters.
   * @return {Promise<ApplicationPageResponse>} - A promise resolving to the list of applications.
   *
   * @example
   * List a single page of applications 
   *
   * ```ts
   * const applications = await applicationClient.listApplications({});
   *
   * applications.applications.forEach(application => {
   *   console.log(application.name);
   * });
   * ```
   */
  public async listApplications(
    params: ListApplicationParams,
  ): Promise<ApplicationPageList> {
    return this.getApplicationPage(params);
  }

  /**
   * Retrieves all applications, iterating over paginated results.
   *
   * @remarks
   * This will keep calling the API until there are no pages left. This will
   * return the `snake_case` and the `camelCase` response. Using `snake_case`
   * is considered deprecated
   *
   * @param {ListApplicationParams} [params={}] - Optional filter parameters.
   * @yields {MergedApplication} - Yields application items.
   * @return {AsyncGenerator<MergedApplication, void, undefined>} - An asynchronous generator.
   *
   * @example
   * List applications with pagination using an iterator
   *
   * ```ts
   * for await (const application of applicationClient.listAllApplications()) {
   *   console.log(application.name);
   * }
   * ```
   */
  public async *listAllApplications(
    params: ListApplicationParams = {},
  ): AsyncGenerator<MergedApplication, void & MergedApplication, undefined> {
    let next = null;
    params.page = params?.page || 1;
    do {
      const resp = await this.getApplicationPage(params);

      yield* resp._embedded?.applications || [];
      next = resp._links?.next;
      params.page++;
    } while (next);
  }

  /**
   * Retrieves a page of applications based on filter parameters.
   *
   * @param {ListApplicationParams} filter - The filter parameters for pagination.
   * @return {Promise<ApplicationPageList>} - A promise resolving to a page of applications.
   *
   * @remarks
   * This will return the `snake_case` and the `camelCase` response. Using
   * `snake_case` is considered deprecated
   *
   * @see API Specification {@link https://developer.vonage.com/en/api/application.v2#listApplication}
   *
   * @example
   * Get a single page of applications
   *
   * ```ts
   * const applications = await applicationClient.getApplicationPage({
   *   page: 1,
   *   size: 10
   * });
   *
   * applications.applications.forEach(application => {
   *   console.log(application.name);
   * });
   * ```
   */
  public async getApplicationPage(
    filter: ListApplicationParams,
  ): Promise<ApplicationPageList> {
    const resp = await this.sendGetRequest<ApplicationPageResponse>(
      `${this.config.apiHost}/v2/applications`,
      Client.transformers.snakeCaseObjectKeys(filter),
    );

    if (resp.data._embedded?.applications) {
      resp.data._embedded.applications
        = resp.data._embedded.applications.map(apiToApplication);
    }

    return {
      ...resp.data,
      totalItems: resp.data.total_items,
      totalPages: resp.data.total_pages,
      pageSize: resp.data.page_size,
    };
  }

  /**
   * Creates a new application with the provided details.
   *
   * @see API Specification {@link https://developer.vonage.com/en/api/application.v2#createApplication}
   *
   * @param {Application} application - The application details to be created.
   * @return {Promise<MergedApplication>} - A promise resolving to the created application.
   *
   * @example
   * Create a new application
   *
   * ```ts
   * const application = await applicationClient.createApplication({
   *   name: 'My Application',
   *   capabilities: {
   *     voice: {
   *       webhooks: {
   *         answerUrl: {
   *           address: 'https://example.com/answer',
   *           httpMethod: 'GET'
   *         },
   *         eventUrl: {
   *           address: 'https://example.com/event',
   *           httpMethod: 'POST'
   *         }
   *       }
   *     }
   *   }
   * });
   *
   * console.log(application.id);
   * ```
   */
  public async createApplication(
    application: Application,
  ): Promise<MergedApplication> {
    const resp = await this.sendPostRequest<ApplicationResponse>(
      `${this.config.apiHost}/v2/applications`,
      Client.transformers.snakeCaseObjectKeys(application, true),
    );

    return apiToApplication(resp.data);
  }

  /**
   * Retrieves an application by its unique identifier.
   *
   * @see API Specification {@link https://developer.vonage.com/en/api/application.v2#getApplication}
   *
   * @param {string} applicationId - The unique identifier of the application to retrieve.
   * @return {Promise<MergedApplication>} - A promise resolving to the retrieved application.
   *
   * @example
   * Retrieve an application  
   *
   * ```ts
   * const application = await applicationClient.getApplication(APPLICATION_ID);
   * console.log(application.name);
   * ```
   */
  public async getApplication(
    applicationId: string,
  ): Promise<MergedApplication> {
    const resp = await this.sendGetRequest<ApplicationResponse>(
      `${this.config.apiHost}/v2/applications/${applicationId}`,
    );

    return apiToApplication(resp.data);
  }

  /**
   * Updates an existing application with the provided details.
   *
   * @see API Specification {@link https://developer.vonage.com/en/api/application.v2#updateApplication}
   *
   * @param {Application} application - The application details to be updated.
   * @return {Promise<MergedApplication>} - A promise resolving to the updated application.
   *
   * @example
   * Update an application  
   *
   * ```ts
   * const application = await applicationClient.updateApplication({
   *   id: APPLICATION_ID,
   *   name: 'My Application',
   * });
   * console.log(application.name);
   * ```
   */
  public async updateApplication(
    application: Application,
  ): Promise<MergedApplication> {
    const resp = await this.sendPutRequest<ApplicationResponse>(
      `${this.config.apiHost}/v2/applications/${application.id}`,
      Client.transformers.snakeCaseObjectKeys(application, true),
    );
    return apiToApplication(resp.data);
  }

  /**
   * Deletes an application by its unique identifier.
   *
   * @see API Specification {@link https://developer.vonage.com/en/api/application.v2#deleteApplication}
   *
   * @param {string} applicationId - The unique identifier of the application to delete.
   * @return {Promise<void>} - A promise indicating the successful deletion of the application.
   *
   * @example
   * Delete an application
   *
   * ```ts
   * await applicationClient.deleteApplication(APPLICATION_ID);
   * ```
   */
  public async deleteApplication(applicationId: string): Promise<void> {
    await this.sendDeleteRequest<void>(
      `${this.config.apiHost}/v2/applications/${applicationId}`,
    );
  }
}
