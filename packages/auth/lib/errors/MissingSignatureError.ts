export class MissingSignatureError extends Error {
  constructor() {
    super('Missing signature algorithm');
  }
}
