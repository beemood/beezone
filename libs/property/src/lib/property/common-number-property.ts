import type { ValidationOptions } from 'class-validator';
import { Max, Min } from 'class-validator';
import type { CommonNumberOptions } from '@beezone/types';

export function CommonNumberProperty(
  options: CommonNumberOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { minimum, maximum } = options;

    if (minimum != undefined) {
      Min(minimum, validationOptions)(...args);
    }

    if (maximum != undefined) {
      Max(maximum, validationOptions)(...args);
    }
  };
}
