import { Some } from '@beezone/types';

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
