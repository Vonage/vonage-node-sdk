export class MissingApiKeyError extends Error {
  constructor() {
    super('Missing API Key');
  }
}
