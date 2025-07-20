import type { BooleanOptions } from '@beezone/types';
import type { ValidationOptions } from 'class-validator';
import { IsBoolean } from 'class-validator';

export function __BooleanValidation(
  options: BooleanOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsBoolean(validationOptions)(...args);
  };
}
