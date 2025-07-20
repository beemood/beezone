import type { StringOptions } from '@beezone/types';
import type { ValidationOptions } from 'class-validator';
import { isDefined, IsString, MaxLength, MinLength } from 'class-validator';

export function __StringValidation(
  options: StringOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsString(validationOptions)(...args);

    const { minLength, maxLength } = options;

    if (isDefined(minLength)) MinLength(minLength, validationOptions)(...args);
    if (isDefined(maxLength)) MaxLength(maxLength, validationOptions)(...args);
  };
}
