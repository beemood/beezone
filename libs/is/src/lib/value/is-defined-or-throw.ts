import { UndefinedError } from '@beezone/errors';
import { Some } from '@beezone/types';
import { isDefined } from './is-defined.js';
/**
 *
 * @param value {@link Some!<T>}
 * @returns T
 * @throw
 */
export function isDefinedOrThrow<T>(value: Some<T>, defaultValue?: Some<T>): T {
  if (isDefined(value)) {
    return value;
  }

  if (isDefined(defaultValue)) {
    return defaultValue;
  }

  throw new UndefinedError(`Value is undefined`);
}
