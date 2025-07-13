import { BooleanPropertyOptions } from './boolean-property-options.js';
import { IntegerPropertyOptions } from './integer-property-options.js';
import { NumberPropertyOptions } from './number-property-options.js';
import { ObjectPropertyOptions } from './object-property-options.js';

import { StringPropertyOptions } from './string-property-options.js';
import { ArrayPropertyOptions } from './array-property-options.js';

export type PropertyOptions =
  | StringPropertyOptions
  | NumberPropertyOptions
  | IntegerPropertyOptions
  | BooleanPropertyOptions
  | ObjectPropertyOptions
  | ArrayPropertyOptions;
