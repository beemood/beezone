import type { Some } from '@beezone/types';
import { isDefined } from './is-defined.js';

export async function isDefinedThen<T>(
  value: Some<T>,
  thenHandler: (value: T) => void | Promise<void>,
  elseHandler?: () => void | Promise<void>
) {
  if (isDefined(value)) {
    await thenHandler(value);
  } else if (elseHandler) {
    await elseHandler();
  }
}
