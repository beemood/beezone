import type { BooleanPropertyOptions } from './boolean-property-options.js';
import type { IntegerPropertyOptions } from './integer-property-options.js';
import type { NumberPropertyOptions } from './number-property-options.js';
import type { ObjectPropertyOptions } from './object-property-options.js';

import type { StringPropertyOptions } from './string-property-options.js';
import type { ArrayPropertyOptions } from './array-property-options.js';

export type PropertyOptions =
  | StringPropertyOptions
  | NumberPropertyOptions
  | IntegerPropertyOptions
  | BooleanPropertyOptions
  | ObjectPropertyOptions
  | ArrayPropertyOptions;
