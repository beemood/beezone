import { PropertyOptions } from '@beezone/types';
import { IsNotEmpty } from 'class-validator';

export function Property(options: PropertyOptions): PropertyDecorator {
  return (...args) => {
    if (options.type) {
      IsNotEmpty()(...args);
    }
  };
}
