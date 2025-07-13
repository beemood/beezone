import { CommonPropertyOptions } from './common-property-options.js';
import { DefaultValueOptions } from './default-value-options.js';

export type StringPropertyOptions = {
  type: 'string';

  minLength?: number;
  maxLength?: number;

  startsWith?: string;
  notStartsWith?: string;

  endsWith?: string;
  notEndsWith?: string;

  contains?: string;
  notContains?: string;

  isIn?: string[];
  notIn?: string[];

  containsProperty?: string;
  notContainsProperty?: string;

  trim?: boolean;
} & CommonPropertyOptions &
  DefaultValueOptions<string>;
