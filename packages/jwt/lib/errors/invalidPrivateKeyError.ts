export class InvalidPrivateKeyError extends Error {
  constructor() {
    super('Private key must be a string or buffer');
  }
}
