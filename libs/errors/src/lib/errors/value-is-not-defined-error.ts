import { BaseError } from '../common/base-error.js';
import { ErrorName } from '../common/error-name.js';

export class ValueIsNotDefinedError extends BaseError {
  constructor() {
    super(`Value is not defined!`, ErrorName.VALUE_IS_NOT_DEFINED);
  }
}

export function throwValueIsNotDefinedError(): never {
  throw new ValueIsNotDefinedError();
}
