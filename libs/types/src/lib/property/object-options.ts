import type { ClassType } from '../common/class-type.js';
import type { CommonPropertyOptions } from './common-property-options.js';
import type { ValueOptions } from './value-options.js';

export type ObjectOptions = {
  type: 'object';
  target: () => ClassType;
} & CommonPropertyOptions &
  ValueOptions<boolean>;
