import { Some } from '@beezone/types';
import { isDefined } from './is-defined.js';

export function definedOrThrow<T>(value: Some<T>): T {
  if (isDefined(value)) {
    return value;
  }

  throw new Error('some');
}
