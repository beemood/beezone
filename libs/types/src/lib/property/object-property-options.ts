import { Any } from '../common/any.js';
import { ClassType } from '../common/class-type.js';
import { CommonPropertyOptions } from './common-property-options.js';
import { DefaultValueOptions } from './default-value-options.js';

export type ObjectPropertyOptions<T extends object = Any> = {
  type: 'object';
  target: () => ClassType<T>;
  maxProperties?: number;
  minProperties?: number;
  isIn?: string[];
  notIn?: string[];
} & CommonPropertyOptions &
  DefaultValueOptions<T>;
