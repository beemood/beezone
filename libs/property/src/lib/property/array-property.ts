import type {
  ValidationOptions} from 'class-validator';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray
} from 'class-validator';
import type { ArrayPropertyOptions } from '@beezone/types';
import { CommonProperty } from './common-property.js';

export function ArrayProperty(
  options: ArrayPropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsArray(validationOptions)(...args);

    CommonProperty(options, validationOptions)(...args);

    const { minSize, maxSize } = options;

    if (minSize != undefined) {
      ArrayMinSize(minSize, validationOptions)(...args);
    }

    if (maxSize != undefined) {
      ArrayMaxSize(maxSize, validationOptions)(...args);
    }
  };
}
