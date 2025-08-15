import { isDefinedOrThrow } from '../value/is-defined-or-throw.js';

export function fileName(filepath: string) {
  return isDefinedOrThrow(filepath.split(/[/\\]/).pop());
}
