import type { ErrorName } from './error-name.js';

export class BaseError extends Error {
  constructor(message: string, protected readonly errorName: ErrorName) {
    super(message);
  }
}
