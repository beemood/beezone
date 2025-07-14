import type {
  ValidationOptions} from 'class-validator';
import {
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import type { StringPropertyOptions } from '@beezone/types';
import { TrimTransformer } from '../transformer/trim-transformer.js';

export function StringProperty(
  options: StringPropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsString(validationOptions)(...args);

    const { minLength, maxLength } = options;

    if (minLength != undefined) {
      MinLength(minLength, validationOptions)(...args);
    }

    if (maxLength != undefined) {
      MaxLength(maxLength, validationOptions)(...args);
    }

    if (options.trim) {
      TrimTransformer()(...args);
    }
  };
}
