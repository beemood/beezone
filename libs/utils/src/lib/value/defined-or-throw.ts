import { throwValueIsNotDefinedError } from '@beezone/errors';
import type { Some } from '@beezone/types';
import { isDefined } from './is-defined.js';

/**
 * Throw {@link ValueIsNotDefinedError!} if the {@link value} is undefined or null
 * @param value
 * @returns value or never
 */
export function definedOrThrow<T>(value: Some<T>): T {
  if (isDefined(value)) return value;

  throwValueIsNotDefinedError();
}
