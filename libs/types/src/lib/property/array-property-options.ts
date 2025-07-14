import type { Any } from '../common/any.js';
import type { CommonPropertyOptions } from './common-property-options.js';
import type { DefaultValueOptions } from './default-value-options.js';
import type { PropertyOptions } from './property-options.js';

export type ArrayPropertyOptions = {
  type: 'array';
  items: PropertyOptions;
  maxSize?: number;
  minSize?: number;
} & CommonPropertyOptions &
  DefaultValueOptions<Any[]>;
