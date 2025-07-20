import type { CommonPropertyOptions } from './common-property-options.js';
import type { ValueOptions } from './value-options.js';

export type StringOptions = {
  type: 'string';
  minLength?: number;
  maxLength?: number;
  notEmpty?: boolean;
  trim?: boolean;
} & CommonPropertyOptions &
  ValueOptions<boolean>;
