import type { Any } from '../common/any.js';
import type { CommonPropertyOptions } from './common-property-options.js';
import type { PropertyOptions } from './property-options.js';
import type { ValueOptions } from './value-options.js';

export type ArrayOptions = {
  type: 'array';
  items: PropertyOptions;
  maxSize?: number;
  minSize?: number;
} & CommonPropertyOptions &
  ValueOptions<Any[]>;
