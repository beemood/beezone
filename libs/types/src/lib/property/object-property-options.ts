import type { Any } from '../common/any.js';
import type { ClassType } from '../common/class-type.js';
import type { CommonPropertyOptions } from './common-property-options.js';
import type { DefaultValueOptions } from './default-value-options.js';

export type ObjectPropertyOptions<T extends object = Any> = {
  type: 'object';
  target: () => ClassType<T>;
  maxProperties?: number;
  minProperties?: number;
  isIn?: string[];
  notIn?: string[];
} & CommonPropertyOptions &
  DefaultValueOptions<T>;
