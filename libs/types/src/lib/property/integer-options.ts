import type { CommonNumberOptions } from './common-number-options.js';
import type { CommonPropertyOptions } from './common-property-options.js';
import type { ValueOptions } from './value-options.js';

export type IntegerOptions = {
  type: 'integer';
} & CommonNumberOptions &
  CommonPropertyOptions &
  ValueOptions<number>;
