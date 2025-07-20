import type { Some } from '@beezone/types';

export function isDefined<T>(value: Some<T>): value is T {
  return value != undefined;
}
