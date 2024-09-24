import { APILink } from '@vonage/server-client';

/**
 * Represents a single template in the Verify API response.
 */
export type TemplateResponse = {
  /**
   * Unique identifier for the template.
   * @example "8f35a1a7-eb2f-4552-8fdf-fffdaee41bc9"
   */
  template_id: string;

  /**
   * The name of the template.
   * @example "my-template"
   */
  name: string;

  /**
   * Indicates whether this is the default template.
   * @example true
   */
  is_default: boolean;

  /**
   * HAL format links related to the template.
   */
  _links: {
    /**
     * A link to the template itself.
     */
    self: APILink;

    /**
     * A link to the template fragments associated with this template.
     */
    fragments: APILink;
  };
}

