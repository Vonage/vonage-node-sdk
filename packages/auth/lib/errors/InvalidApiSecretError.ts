export class InvalidApiSecretError extends Error {
  constructor() {
    super('API Secret must be a string');
  }
}
