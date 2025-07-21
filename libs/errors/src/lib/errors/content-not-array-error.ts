import { BaseError } from '../common/base-error.js';
import { ErrorName } from '../common/error-name.js';

export class ContentNotArrayError extends BaseError {
  constructor() {
    super(`Content is not a json array!`, ErrorName.CONTENT_NOT_ARRAY);
  }
}

export function throwContentNotArrayError(): never {
  throw new ContentNotArrayError();
}
