import type { IntegerOptions } from '@beezone/types';
import type { ValidationOptions } from 'class-validator';
import { IsInt } from 'class-validator';

export function __IntegerValidation(
  options: IntegerOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsInt(validationOptions)(...args);
  };
}
