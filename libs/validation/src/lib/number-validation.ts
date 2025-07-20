import type { NumberOptions } from '@beezone/types';
import type { ValidationOptions } from 'class-validator';
import { IsNumber } from 'class-validator';

export function __NumberValidation(
  options: NumberOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsNumber({}, validationOptions)(...args);
  };
}
