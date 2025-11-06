import { AuthenticationType, Client } from '@vonage/server-client';
import {
  CheckRequestResponse,
  ListAllTemplateFragmentsParams,
  ListAllTemplateFragmentsResponse,
  ListAllTemplatesParams,
  ListAllTemplatesResponse,
  Request,
  Template,
  TemplateFragmentPage,
  TemplateFragmentResponse,
  TemplateFragment,
  TemplatePage,
  TemplateResponse,
  VerificationRequestParams,
  VerificationResponse,
} from './types/index.js';

/**
 * A class for interacting with the Vonage Verify API (Version 2).
 */
export class Verify2 extends Client {
  /**
   * The authentication type used for this client (JWT).
   */
  protected authType = AuthenticationType.JWT;

  /**
   * Creates a new verification request.
   *
   * @param {VerificationRequestParams} params - The parameters for the
   *  verification request.
   * @return {Request} A `Request` object containing the request ID.
   */
  async newRequest(params: VerificationRequestParams): Promise<Request> {
    const resp = await this.sendPostRequest<VerificationResponse>(
      `${this.config.apiHost}/v2/verify`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return {
      requestId: resp.data.request_id,
      checkUrl: resp.data.check_url,
    };
  }

  /**
   * Checks a verification code against a verification request.
   * @param {string} requestId - The ID of the verification request.
   * @param {string} code - The verification code to check.
   * @return {string} The status of the verification code check.
   */
  async checkCode(requestId: string, code: string): Promise<string> {
    const resp = await this.sendPostRequest<CheckRequestResponse>(
      `${this.config.apiHost}/v2/verify/${requestId}`,
      {
        code: code,
      },
    );

    return resp.data.status;
  }

  /**
   * Move the request to the next workflow step, if available.
   * @param {string} requestId - The ID of the verification request.
   * @return {boolean} `true` if the request was successful.
   */
  async nextWorkflow(requestId: string): Promise<boolean> {
    try {
      await this.sendPostRequest(
        `${this.config.apiHost}/v2/verify/${requestId}/next_workflow`,
      );
      return true;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      return false;
    }
  }

  /**
   * Cancels a verification request.
   * @param {string} requestId - The ID of the verification request to cancel.
   * @return {boolean} `true` if the cancellation was successful.
   */
  async cancel(requestId: string): Promise<boolean> {
    try {
      await this.sendDeleteRequest(
        `${this.config.apiHost}/v2/verify/${requestId}`,
      );
      return true;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      return false;
    }
  }

  /**
   * Generator function to list all templates across multiple pages.
   *
   * @remarks
   * This will continue calling the API to retrieve all templates until there are no more pages left.
   * The function yields each template in camelCase format.
   *
   * @param {ListAllTemplatesParams} [params={}] - Optional filter parameters, including pagination.
   * @yields {Template} - Yields each template object in camelCase format.
   *
   * @example
   * List all templates using pagination:
   * ```ts
   * for await (const template of templateClient.listAllTemplates({ pageSize: 5 })) {
   *   console.log(template.name);
   * }
   * ```
   *
   * @example
   * List all templates without pagination:
   * ```ts
   * for await (const template of templateClient.listAllTemplates()) {
   *   console.log(template.name);
   * }
   * ```
   */
  async *listAllTemplates(
    params: ListAllTemplatesParams = {},
  ): AsyncGenerator<Template, void, undefined> {
    let next = null;
    params.page = params?.page || 1;
    do {
      const resp = await this.getTemplatePage(params);

      yield* resp.templates || [];
      next = resp.links?.next;
      params.page++;
    } while (next);
  }

  /**
   * Retrieves a single page of templates based on the provided pagination parameters.
   *
   * @param {ListAllTemplatesParams} params - The filter parameters for pagination (e.g., page number, page size).
   * @return {Promise<ListAllTemplatesResponse>} - A promise resolving to a page of templates.
   *
   * @example
   * Get a single page of templates:
   *
   * ```ts
   * const templatePage = await templateClient.getTemplatePage({
   *   page: 1,
   *   pageSize: 10
   * });
   *
   * templatePage.templates.forEach(template => {
   *   console.log(template.name);
   * });
   * ```
   */
  async getTemplatePage(
    params: ListAllTemplatesParams = {},
  ): Promise<TemplatePage> {
    const resp = await this.sendGetRequest<ListAllTemplatesResponse>(
      `${this.config.apiHost}/v2/verify/templates`,
      {
        ...(params.page ? { page: params.page } : {}),
        ...(params.pageSize ? { page_size: params.pageSize } : {}),
      }
    );

    const templates: Template[] = (resp.data._embedded?.templates || []).map(
      (template: TemplateResponse) => Client.transformers.camelCaseObjectKeys(template) as Template
    );

    return {
      pageSize: resp.data.page_size,
      page: resp.data.page,
      totalPages: resp.data.total_pages,
      totalItems: resp.data.total_items,
      templates: templates,
      links: resp.data._links,
    };
  }

  /**
   * Creates a new template with the provided details.
   *
   * @param {Template} template - The template details to be created.
   * @return {Promise<Template>} - A promise resolving to the created template in camelCase format.
   *
   * @example
   * Create a new template:
   * ```ts
   * const newTemplate = await templateClient.createTemplate({
   *   name: 'My New Template',
   * });
   * console.log(newTemplate.name);
   * ```
   */
  public async createTemplate(template: Template): Promise<Template> {
    const resp = await this.sendPostRequest<TemplateResponse>(
      `${this.config.apiHost}/v2/verify/templates`,
      {
        name: template.name,
      }
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as Template;
  }

  /**
   * Retrieves a single template by its unique identifier.
   *
   * @param {string} templateId - The unique identifier of the template to retrieve.
   * @return {Promise<Template>} - A promise resolving to the retrieved template in camelCase format.
   *
   * @example
   * Get a template by ID:
   * ```ts
   * const template = await templateClient.getTemplate('22f571c1-f41a-4db2-bba7-f23a069200c1');
   * console.log(template.name);
   * ```
   */
  public async getTemplate(templateId: string): Promise<Template> {
    const resp = await this.sendGetRequest<TemplateResponse>(
      `${this.config.apiHost}/v2/verify/templates/${templateId}`,
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as Template;
  }

  /**
   * Deletes a template by its unique identifier.
   *
   * @param {string} templateId - The unique identifier of the template to delete.
   * @return {Promise<true>} - A promise that resolves when the template is successfully deleted.
   *
   * @example
   * Delete a template by ID:
   * ```ts
   * await templateClient.deleteTemplate('22f571c1-f41a-4db2-bba7-f23a069200c1');
   * console.log('Template deleted successfully');
   * ```
   */
  public async deleteTemplate(templateId: string): Promise<true> {
    await this.sendDeleteRequest<void>(
      `${this.config.apiHost}/v2/verify/templates/${templateId}`,
    );
    return true;
  }

  /**
   * Updates an existing template with the provided details.
   *
   * @param {Template} template - The full template object with updated details. The template must include its ID.
   * @return {Promise<Template>} - A promise resolving to the updated template in camelCase format.
   *
   * @example
   * Update a template:
   * ```ts
   * const updatedTemplate = await templateClient.updateTemplate({
   *   templateId: '22f571c1-f41a-4db2-bba7-f23a069200c1',
   *   name: 'Updated Template Name',
   *   isDefault: false,
   * });
   * console.log(updatedTemplate.name);
   * ```
   */
  public async updateTemplate(template: Template): Promise<Template> {
    if (!template.templateId) {
      throw new Error('Template ID is required for updating a template');
    }

    const resp = await this.sendPatchRequest<TemplateResponse>(
      `${this.config.apiHost}/v2/verify/templates/${template.templateId}`,
      {
        name: template.name,
        is_default: template.isDefault || false,
      }
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as Template;
  }

  /**
   * Retrieves a page of template fragments based on the provided pagination and filter parameters.
   *
   * @param {ListAllTemplateFragmentsQueryParams} params - The filter parameters for pagination (e.g., page number, page size, template ID).
   * @return {Promise<ListAllTemplateFragmentsResponse>} - A promise resolving to a page of template fragments.
   *
   * @example
   * Get a page of template fragments:
   * ```ts
   * const fragmentPage = await templateClient.getTemplateFragmentPage({
   *   templateId: '22f571c1-f41a-4db2-bba7-f23a069200c1',
   *   page: 1,
   *   pageSize: 10,
   * });
   * fragmentPage._embedded.template_fragments.forEach(fragment => {
   *   console.log(fragment.text);
   * });
   * ```
   */
  public async getTemplateFragmentPage(
    params: ListAllTemplateFragmentsParams,
  ): Promise<TemplateFragmentPage> {
    const resp = await this.sendGetRequest<ListAllTemplateFragmentsResponse>(
      `${this.config.apiHost}/v2/verify/templates/${params.templateId}/template_fragments`,
      {
        ...(params.page ? { page: params.page } : {}),
        ...(params.pageSize ? { page_size: params.pageSize } : {}),
      }
    );

    const fragments: TemplateFragment[] = (resp.data._embedded?.template_fragments || []).map(
      (fragment: TemplateFragmentResponse) => Client.transformers.camelCaseObjectKeys(fragment) as TemplateFragment
    );

    return {
      pageSize: resp.data.page_size,
      page: resp.data.page,
      totalPages: resp.data.total_pages,
      totalItems: resp.data.total_items,
      fragments: fragments,
      links: resp.data._links,
    };
  }

  /**
   * Generator function to list all templates across multiple pages.
   *
   * @remarks
   * This will continue calling the API to retrieve all templates until there are no more pages left.
   * The function yields each template in camelCase format.
   *
   * @param {ListAllTemplateFragmentsParams} [params={}] - Optional filter parameters, including pagination.
   * @yields {TemplateFragment} - Yields each template object in camelCase format.
   *
   * @example
   * List all templates using pagination:
   * ```ts
   * for await (const template of templateClient.listAllTemplateFragments({ pageSize: 5 })) {
   *   console.log(template.name);
   * }
   * ```
   *
   * @example
   * List all templates without pagination:
   * ```ts
   * for await (const template of templateClient.listAllTemplateFragments()) {
   *   console.log(template.name);
   * }
   * ```
   */
  async *listAllTemplateFragments(
    params: ListAllTemplateFragmentsParams,
  ): AsyncGenerator<TemplateFragment, void, undefined> {
    let next = null;
    params.page = params?.page || 1;
    do {
      const resp = await this.getTemplateFragmentPage(params);

      yield* resp.fragments || [];
      next = resp.links?.next;
      params.page++;
    } while (next);
  }
  /**
   * Retrieves a single template fragment by its unique identifier.
   *
   * @param {string} templateId - The unique identifier of the template.
   * @param {string} fragmentId - The unique identifier of the template fragment.
   * @return {Promise<TemplateFragmentResponse>} - A promise resolving to the retrieved template fragment in snake_case format.
   *
   * @example
   * Get a template fragment by ID:
   * ```ts
   * const fragment = await templateClient.getTemplateFragment('22f571c1-f41a-4db2-bba7-f23a069200c1', 'c70f446e-997a-4313-a081-60a02a31dc19');
   * console.log(fragment.text);
   * ```
   */
  public async getTemplateFragment(
    templateId: string,
    fragmentId: string,
  ): Promise<TemplateFragment> {
    // Send a GET request to retrieve the specified template fragment by its ID
    const resp = await this.sendGetRequest<TemplateFragmentResponse>(
      `${this.config.apiHost}/v2/verify/templates/${templateId}/template_fragments/${fragmentId}`,
    );

    return Client.transformers.camelCaseObjectKeys(resp.data, true) as TemplateFragment;
  }

  /**
   * Creates a new template fragment with the provided details.
   *
   * @param {string} templateId - The unique identifier of the template to which the fragment belongs.
   * @param {TemplateFragment} fragment - The details of the template fragment to be created.
   * @return {Promise<TemplateFragment>} - A promise resolving to the created template fragment in camelCase format.
   *
   * @example
   * Create a new template fragment:
   * ```ts
   * const newFragment = await templateClient.createTemplateFragment(
   *   '22f571c1-f41a-4db2-bba7-f23a069200c1',
   *   {
   *     channel: 'sms',
   *     locale: 'en-us',
   *     text: 'Your verification code is ${code}',
   *   },
   * );
   * console.log(newFragment.text);
   * ```
   */
  public async createTemplateFragment(
    templateId: string,
    fragment: TemplateFragment,
  ): Promise<TemplateFragment> {
    const resp = await this.sendPostRequest<TemplateFragmentResponse>(
      `${this.config.apiHost}/v2/verify/templates/${templateId}/template_fragments`,
      {
        channel: fragment.channel,
        locale: fragment.locale,
        text: fragment.text,
      }
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as TemplateFragment;
  }

  /**
   * Deletes a template fragment by its unique identifier.
   *
   * @param {string} templateId - The unique identifier of the template to delete.
   * @param {string} fragmentId - The unique identifier of the template to delete.
   * @return {Promise<true>} - A promise that resolves when the template is successfully deleted.
   *
   * @example
   * Delete a template by ID:
   * ```ts
   * await templateClient.deleteTemplateFragment(
   *   '22f571c1-f41a-4db2-bba7-f23a069200c1'
   *   'c70f446e-997a-4313-a081-60a02a31dc19',
   * );
   * console.log('Template Fragment deleted successfully');
   * ```
   */
  public async deleteTemplateFragment(
    templateId: string,
    fragmentId: string
  ): Promise<true> {
    await this.sendDeleteRequest<void>(
      `${this.config.apiHost}/v2/verify/templates/${templateId}/template_fragments/${fragmentId}`,
    );
    return true;
  }

  /**
   * Updates an existing template with the provided details.
   *
   * @param {String} templateId - The ID of the template this fragment belongs to.
   * @param {TemplateFragment} fragment - The full template fragment object with updated details.
   * @return {Promise<TemplateFragment>} - A promise resolving to the updated template fragment in camelCase format.
   *
   * @example
   * Update a template:
   * ```ts
   * const updatedTemplateFragment = await templateClient.updateTemplateFragment(
   *  '22f571c1-f41a-4db2-bba7-f23a069200c1',
   *   {
   *     templateId: '22f571c1-f41a-4db2-bba7-f23a069200c1',
   *     name: 'Updated Template Name',
   *     isDefault: false,
   *   }
   * );
   * console.log(updatedTemplateFragment.name);
   * ```
   */
  public async updateTemplateFragment(
    templateId: string,
    fragment: TemplateFragment
  ): Promise<Template> {
    if (!fragment.templateFragmentId) {
      throw new Error('Template Fragment ID is required for updating a template fragment');
    }

    const resp = await this.sendPatchRequest<TemplateResponse>(
      `${this.config.apiHost}/v2/verify/templates/${templateId}/template_fragments/${fragment.templateFragmentId}`,
      {
        text: fragment.text
      }
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as Template;
  }
}
