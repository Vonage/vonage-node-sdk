export class InvalidApiKeyError extends Error {
  constructor() {
    super('API Key must be a string');
  }
}
