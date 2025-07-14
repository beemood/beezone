import type { CommonPropertyOptions } from './common-property-options.js';
import type { DefaultValueOptions } from './default-value-options.js';

export type StringFormat = 'password' | 'emai' | 'date';

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

  stringFormat?: StringFormat;
} & CommonPropertyOptions &
  DefaultValueOptions<string>;
