import type { Some } from '@beezone/types';
import { isDefined } from './is-defined.js';

export function isUndefined<T>(value: Some<T>): value is undefined | null {
  if (isDefined(value)) {
    return false;
  }
  return true;
}
