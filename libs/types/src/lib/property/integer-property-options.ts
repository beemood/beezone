import { CommonNumberOptions } from './common-number-options.js';
import { CommonPropertyOptions } from './common-property-options.js';
import { DefaultValueOptions } from './default-value-options.js';

export type IntegerPropertyOptions = {
  type: 'integer';
} & CommonNumberOptions &
  CommonPropertyOptions &
  DefaultValueOptions<number>;
