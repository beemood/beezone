import type { CommonPropertyOptions } from './common-property-options.js';
import type { DefaultValueOptions } from './default-value-options.js';

export type BooleanPropertyOptions = {
  type: 'boolean';
} & CommonPropertyOptions &
  DefaultValueOptions<boolean>;
