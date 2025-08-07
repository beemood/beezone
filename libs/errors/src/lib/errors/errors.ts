import { BaseError } from '../common/base-error.js';
import { ErrorCodes } from '../common/error-codes.js';
export class UnkownError extends BaseError {
  constructor(message = 'UNKOWN: No message') {
    super(message, ErrorCodes.UNKOWN);
  }
}
export class UndefinedError extends BaseError {
  constructor(message = 'UNDEFINED: No message') {
    super(message, ErrorCodes.UNDEFINED);
  }
}