import type {
  CommonPropertyOptions,
  DefaultValueOptions,
} from './common-property-options.js';
import { PrimitivePropertyOptions } from './primitive-property-options.js';

export type ArrayPropertyOptions = {
  type: 'array';
  items: PrimitivePropertyOptions;

  maxSize?: number;
  minSize?: number;
} & CommonPropertyOptions &
  DefaultValueOptions<any[]>;
