import type { Some } from '@beezone/types';

/**
 * Check the value is defined, not null, not undefined, and not NaN, and not a invalid date.
 * @param value optional value {@link Some!}
 * @returns boolean
 */
export function isDefined<T>(value: Some<T>): value is T {
  if (value == undefined) {
    return false;
  }

  if (typeof value === 'number') {
    if (isNaN(value)) {
      return false;
    }
  }

  if (value instanceof Date) {
    if (value.toString() === 'Invalid Date') {
      return false;
    }
  }

  return true;
}
