import { Property } from '../property/property.js';

export function SomeStringProperty(isIn?: string[]): PropertyDecorator {
  return (...args) => {
    Property({
      type: 'string',
      isIn,
      transform: true,
    })(...args);
  };
}
