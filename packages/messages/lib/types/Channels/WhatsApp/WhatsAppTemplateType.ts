/**
 * Represents a WhatsApp template for sending structured template messages.
 *
 * @group WhatsApp
 */
export type WhatsAppTemplateType = {
  /**
   * The name of the WhatsApp template.
   */
  name: string;

  /**
   * An array of parameters for the WhatsApp template.
   */
  parameters: string[];
};
