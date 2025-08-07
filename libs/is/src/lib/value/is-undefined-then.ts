import { Some } from '@beezone/types';
import { isUndefined } from './is-undefined.js';

export async function isUndefinedThen<T>(
  value: Some<T>,
  thenHandler: () => void | Promise<void>,
  elseHandler?: (value: T) => void | Promise<void>
) {
  if (isUndefined(value)) {
    await thenHandler();
  } else if (elseHandler) {
    await elseHandler(value);
  }
}
