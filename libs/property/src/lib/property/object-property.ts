import { IsObject, ValidationOptions } from 'class-validator';
import { ObjectPropertyOptions } from '@beezone/types';
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
