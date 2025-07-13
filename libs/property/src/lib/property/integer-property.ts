import { IsInt, ValidationOptions } from 'class-validator';
import { IntegerPropertyOptions } from '@beezone/types';
import { CommonNumberProperty } from './common-number-property.js';
import { CommonProperty } from './common-property.js';

export function IntegerProperty(
  options: IntegerPropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsInt(validationOptions)(...args);
    CommonProperty(options, validationOptions)(...args);
    CommonNumberProperty(options, validationOptions)(...args);
  };
}
