import { Property } from '../property/property.js';

export function SomePositiveIntProperty(): PropertyDecorator {
  return (...args) => {
    Property({ type: 'integer', minimum: 0, defaultValue: 1, transform: true })(
      ...args
    );
  };
}
