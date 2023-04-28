export class MissingApiSecretError extends Error {
  constructor() {
    super('Missing API Secret');
  }
}
