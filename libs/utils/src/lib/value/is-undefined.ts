import type { Some } from '@beezone/types';

/**
 * Check the value is undefined, null, NaN, or invalid date
 * @param value optional {@link Some!}
 * @returns boolean
 */
export function isUndefined<T>(value: Some<T>): value is undefined {
  if (value == undefined) {
    return true;
  }

  if (typeof value === 'number') {
    if (isNaN(value)) {
      return true;
    }
  }

  if (value instanceof Date) {
    if (value.toString() === 'Invalid Date') {
      return true;
    }
  }

  return false;
}
