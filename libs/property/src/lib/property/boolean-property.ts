import type { ValidationOptions } from 'class-validator';
import { IsBoolean } from 'class-validator';
import type { BooleanPropertyOptions } from '@beezone/types';
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
