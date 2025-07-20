import { BaseError } from '../common/base-error.js';
import { ErrorName } from '../common/error-name.js';

export class ValueIsRequiredError extends BaseError {
  constructor() {
    super(`Value is required!`, ErrorName.VALUE_IS_REQUIRED);
  }
}

export function throwValueIsRequiredError(): never {
  throw new ValueIsRequiredError();
}
