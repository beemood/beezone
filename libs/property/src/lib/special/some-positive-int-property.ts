import { Property } from '../property/property.js';

export function SomePositiveIntProperty(defaultValue?: number): PropertyDecorator {
  return (...args) => {
    Property({ type: 'integer', minimum: 0, defaultValue, transform: true })(
      ...args
    );
  };
}
