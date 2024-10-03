/**
 * Represents a value object for a template, converted to camelCase, without _links.
 */
export type Template = {
  /**
   * Unique identifier for the template.
   * @example "8f35a1a7-eb2f-4552-8fdf-fffdaee41bc9"
   */
  templateId: string;

  /**
   * The name of the template.
   * @example "my-template"
   */
  name: string;

  /**
   * Indicates whether this is the default template.
   * @example true
   */
  isDefault: boolean;
};
