import type { ValidationOptions } from 'class-validator';
import { IsNumber } from 'class-validator';
import type { NumberPropertyOptions } from '@beezone/types';
import { CommonNumberProperty } from './common-number-property.js';
import { CommonProperty } from './common-property.js';

export function NumberProperty(
  options: NumberPropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsNumber({}, validationOptions)(...args);
    CommonProperty(options, validationOptions)(...args);
    CommonNumberProperty(options, validationOptions)(...args);
  };
}
