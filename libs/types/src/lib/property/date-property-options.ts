import type { CommonPropertyOptions } from './common-property-options.js';
import type { DefaultValueOptions } from './default-value-options.js';

export type DatePropertyOptions = {
  type: 'date';
  minimum?: Date;
  maximum?: Date;
  moreThanProperty?: string;
  lessThanProperty?: string;
} & CommonPropertyOptions &
  DefaultValueOptions<Date>;
