import { CommonNumberOptions } from './common-number-options.js';
import { CommonPropertyOptions } from './common-property-options.js';
import { DefaultValueOptions } from './default-value-options.js';

export type NumberPropertyOptions = {
  type: 'number';
} & CommonNumberOptions &
  CommonPropertyOptions &
  DefaultValueOptions<number>;
