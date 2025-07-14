import type { CommonNumberOptions } from './common-number-options.js';
import type { CommonPropertyOptions } from './common-property-options.js';
import type { DefaultValueOptions } from './default-value-options.js';

export type IntegerPropertyOptions = {
  type: 'integer';
} & CommonNumberOptions &
  CommonPropertyOptions &
  DefaultValueOptions<number>;
