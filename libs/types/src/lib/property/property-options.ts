import type { ArrayOptions } from './array-options.js';
import type { BooleanOptions } from './boolean-options.js';
import type { IntegerOptions } from './integer-options.js';
import type { NumberOptions } from './number-options.js';
import type { ObjectOptions } from './object-options.js';
import type { StringOptions } from './string-options.js';

export type PropertyOptions =
  | StringOptions
  | NumberOptions
  | IntegerOptions
  | BooleanOptions
  | ObjectOptions
  | ArrayOptions;
