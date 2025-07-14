import type { PropertyOptions } from '@beezone/types';
import type { ValidationOptions } from 'class-validator';
import { StringProperty } from './string-property.js';
import { NumberProperty } from './number-property.js';
import { BooleanProperty } from './boolean-property.js';
import { ObjectProperty } from './object-property.js';
import { ArrayProperty } from './array-property.js';
import { ApiProperty } from '@nestjs/swagger';
import { toApiPropertyOptions } from './to-api-property-options.js';

export function Property(
  options: PropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { type } = options;

    if (!validationOptions) {
      ApiProperty(toApiPropertyOptions(options))(...args);
    }

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
        ObjectProperty(options, validationOptions)(...args);
        break;
      }
      case 'array': {
        ArrayProperty(options, validationOptions)(...args);
        Property(options.items, { ...validationOptions, each: true })(...args);
        break;
      }
    }
  };
}
