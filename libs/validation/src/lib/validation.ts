import type { PropertyOptions } from '@beezone/types';
import type { ValidationOptions } from 'class-validator';
import { __ArrayValidation } from './array-validation.js';
import { __BooleanValidation } from './boolean-validation.js';
import { __CommonValidation } from './common-validation.js';
import { __IntegerValidation } from './integer-validation.js';
import { __NumberValidation } from './number-validation.js';
import { __ObjectValidation } from './object-validation.js';
import { __StringValidation } from './string-validation.js';

export function Validation(
  options: PropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    if (!validationOptions) {
      __CommonValidation(options, validationOptions)(...args);
    }
    switch (options.type) {
      case 'string': {
        __StringValidation(options, validationOptions)(...args);
        break;
      }
      case 'number': {
        __NumberValidation(options, validationOptions)(...args);
        break;
      }
      case 'boolean': {
        __BooleanValidation(options, validationOptions)(...args);
        break;
      }
      case 'object': {
        __ObjectValidation(options, validationOptions)(...args);
        break;
      }
      case 'integer': {
        __IntegerValidation(options, validationOptions)(...args);
        break;
      }
      case 'array': {
        __ArrayValidation(options, validationOptions)(...args);
        Validation(options.items, { ...validationOptions, each: true })(
          ...args
        );
        break;
      }
    }
  };
}
