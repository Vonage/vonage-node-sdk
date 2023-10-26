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
 */
export type MergedApplication = Application | ApplicationResponse;

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
   */
  public async *listAllApplications(
    params: ListApplicationParams = {},
  ): AsyncGenerator<MergedApplication, void & MergedApplication, undefined> {
    let next = null;
    params.page = params?.page || 1;
    do {
      const resp = await this.getApplicationPage(params);

      yield* resp._embedded?.applications;
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
   */
  public async deleteApplication(applicationId: string): Promise<void> {
    await this.sendDeleteRequest<void>(
      `${this.config.apiHost}/v2/applications/${applicationId}`,
    );
  }
}
