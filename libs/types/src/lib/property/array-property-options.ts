import { Any } from '../common/any.js';
import { CommonPropertyOptions } from './common-property-options.js';
import { DefaultValueOptions } from './default-value-options.js';
import { PropertyOptions } from './property-options.js';

export type ArrayPropertyOptions = {
  type: 'array';
  items: PropertyOptions;
  maxSize?: number;
  minSize?: number;
} & CommonPropertyOptions &
  DefaultValueOptions<Any[]>;
