import type { ObjectOptions } from '@beezone/types';
import { Type } from 'class-transformer';
import type { ValidationOptions } from 'class-validator';
import { IsObject, ValidateNested } from 'class-validator';

export function __ObjectValidation(
  options: ObjectOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsObject(validationOptions)(...args);
    Type(options.target)(...args);
    ValidateNested(validationOptions)(...args);
  };
}
