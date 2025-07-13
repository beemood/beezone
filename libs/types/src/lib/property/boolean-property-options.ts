import { CommonPropertyOptions } from './common-property-options.js';
import { DefaultValueOptions } from './default-value-options.js';

export type BooleanPropertyOptions = {
  type: 'boolean';
} & CommonPropertyOptions &
  DefaultValueOptions<boolean>;
