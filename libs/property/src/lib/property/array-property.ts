import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  ValidationOptions,
} from 'class-validator';
import { ArrayPropertyOptions } from '@beezone/types';
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
