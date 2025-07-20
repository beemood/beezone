import type { Some } from '@beezone/types';

export function isUndefined<T>(value: Some<T>): value is undefined {
  return value == undefined;
}
