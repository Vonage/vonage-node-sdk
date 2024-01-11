import { Type, ProductType } from '../enums';

/**
 * Represents parameters for a transaction redaction request.
 */
export type TransactionParams = {
  /**
   * The transaction ID to redact.
   */
  id: string;

  /**
   * Product name that the ID provided relates to.
   * Must be one of: sms, voice, number-insight, verify, verify-sdk, messages.
   */
  product: ProductType;

  /**
   * Required if redacting SMS data. Must be one of: inbound, outbound.
   */
  type: Type;
};
