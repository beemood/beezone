import { IsBoolean, ValidationOptions } from 'class-validator';
import { BooleanPropertyOptions } from '@beezone/types';

export function BooleanProperty(
  options: BooleanPropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsBoolean(validationOptions)(...args);
  };
}
