import type { CommonPropertyOptions } from './common-property-options.js';
import type { ValueOptions } from './value-options.js';

export type StringOptions = {
  type: 'string';
  minLength?: number;
  maxLength?: number;
} & CommonPropertyOptions &
  ValueOptions<boolean>;
