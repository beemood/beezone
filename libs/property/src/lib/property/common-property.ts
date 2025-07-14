import { PropertyOptions } from '@beezone/types';
import { IsDefined, IsOptional, ValidationOptions } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { JsonTransformer } from '../transformer/json-transformer.js';
import { DefaultValueTransformer } from '../transformer/default-value-transformer.js';

export function CommonProperty(
  options: PropertyOptions,
  valiationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { required, exclude, transform, defaultValue } = options;

    if (!valiationOptions) {
      if (required === true) {
        IsDefined(valiationOptions)(...args);
      } else {
        IsOptional(valiationOptions)(...args);
      }

      if (exclude === true) {
        Exclude()(...args);
      } else {
        Expose()(...args);
      }

      if (transform) {
        JsonTransformer()(...args);
      }

      if (defaultValue) {
        DefaultValueTransformer(options.defaultValue)(...args);
      }
    }
  };
}
