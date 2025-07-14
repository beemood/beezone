import type { ValidationOptions } from 'class-validator';
import { IsObject } from 'class-validator';
import type { ObjectPropertyOptions } from '@beezone/types';
import { CommonProperty } from './common-property.js';

export function ObjectProperty(
  options: ObjectPropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsObject(validationOptions)(...args);
    CommonProperty(options, validationOptions)(...args);
  };
}
