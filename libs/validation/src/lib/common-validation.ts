import type { CommonPropertyOptions } from '@beezone/types';
import { Transform } from 'class-transformer';
import { IsDefined, IsOptional, type ValidationOptions } from 'class-validator';

export function __CommonValidation(
  options: CommonPropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { required } = options;

    if (required === true) {
      IsDefined(validationOptions)(...args);
    } else {
      IsOptional(validationOptions)(...args);
    }

    if (options.transform == true) {
      Transform(({ value }) => {
        if (typeof value === 'string') {
          return JSON.parse(value);
        }
        return value;
      })(...args);
    }
  };
}
