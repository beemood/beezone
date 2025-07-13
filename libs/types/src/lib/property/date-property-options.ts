import { CommonPropertyOptions } from './common-property-options.js';
import { DefaultValueOptions } from './default-value-options.js';

export type DatePropertyOptions = {
  type: 'date';
  minimum?: Date;
  maximum?: Date;
  moreThanProperty?: string;
  lessThanProperty?: string;
} & CommonPropertyOptions &
  DefaultValueOptions<Date>;
