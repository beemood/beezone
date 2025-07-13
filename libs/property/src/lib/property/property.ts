import { PropertyOptions } from '@beezone/types';
import { ValidationOptions } from 'class-validator';
import { StringProperty } from './string-property.js';
import { NumberProperty } from './number-property.js';
import { BooleanProperty } from './boolean-property.js';

export function Property(
  options: PropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { type } = options;

    switch (type) {
      case 'string': {
        StringProperty(options, validationOptions)(...args);
        break;
      }
      case 'number': {
        NumberProperty(options, validationOptions)(...args);
        break;
      }
      case 'integer': {
        break;
      }
      case 'boolean': {
        BooleanProperty(options, validationOptions)(...args);
        break;
      }
      case 'object': {
        break;
      }
      case 'array': {
        break;
      }
    }
  };
}
