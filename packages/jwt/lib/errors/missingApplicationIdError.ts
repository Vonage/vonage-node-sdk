export class MissingApplicationIdError extends Error {
  constructor() {
    super('Missing application id');
  }
}
