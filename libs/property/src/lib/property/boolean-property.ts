import { IsBoolean, ValidationOptions } from 'class-validator';
import { BooleanPropertyOptions } from '@beezone/types';
import { CommonProperty } from './common-property.js';

export function BooleanProperty(
  options: BooleanPropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsBoolean(validationOptions)(...args);
    CommonProperty(options, validationOptions)(...args);
  };
}
