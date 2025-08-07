import { ErrorCodes } from './error-codes.js';

export class BaseError extends Error {
  constructor(
    message = 'Message is not provided',
    public readonly code: ErrorCodes = ErrorCodes.UNKOWN
  ) {
    super(`${code}: ${message}`);
  }
}
