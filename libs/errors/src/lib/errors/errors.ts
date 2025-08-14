import { BaseError } from '../common/base-error.js';
import { ErrorCodes } from '../common/error-codes.js';
export class UnknownError extends BaseError {
  constructor(message = 'UNKNOWN: No message') {
    super(message, ErrorCodes.UNKNOWN);
  }
}
export class UndefinedError extends BaseError {
  constructor(message = 'UNDEFINED: No message') {
    super(message, ErrorCodes.UNDEFINED);
  }
}
export class EmptyError extends BaseError {
  constructor(message = 'EMPTY: No message') {
    super(message, ErrorCodes.EMPTY);
  }
}
export class OutOfScopeError extends BaseError {
  constructor(message = 'OUT_OF_SCOPE: No message') {
    super(message, ErrorCodes.OUT_OF_SCOPE);
  }
}
export class InvalidNameError extends BaseError {
  constructor(message = 'INVALID_NAME: No message') {
    super(message, ErrorCodes.INVALID_NAME);
  }
}
export class InvalidParameterError extends BaseError {
  constructor(message = 'INVALID_PARAMETER: No message') {
    super(message, ErrorCodes.INVALID_PARAMETER);
  }
}