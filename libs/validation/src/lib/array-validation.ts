import type { ArrayOptions } from '@beezone/types';
import { isDefined } from '@beezone/utils';
import type { ValidationOptions } from 'class-validator';
import { ArrayMaxSize, ArrayMinSize, IsArray } from 'class-validator';

export function __ArrayValidation(
  options: ArrayOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsArray(validationOptions)(...args);

    const { maxSize, minSize } = options;

    if (isDefined(maxSize)) ArrayMaxSize(maxSize, validationOptions)(...args);
    if (isDefined(minSize)) ArrayMinSize(minSize, validationOptions)(...args);
  };
}
