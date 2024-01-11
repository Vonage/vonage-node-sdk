/**
 * Interface representing HTTP headers as a string-keyed object. Each property
 * represents a header name, and the associated value can be a string or an
 * array of strings. Includes optional 'authorization' and 'content-type'
 * properties with restricted possible values for 'content-type'.
 */
export type Headers = {
  [index: string]: string;
};
