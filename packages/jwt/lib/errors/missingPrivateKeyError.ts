export class MissingPrivateKeyError extends Error {
  constructor() {
    super('Missing private key');
  }
}
