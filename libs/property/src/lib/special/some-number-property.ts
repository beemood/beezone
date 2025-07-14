import { Property } from '../property/property.js';

export function SomeNumberProperty(isIn?: number[]): PropertyDecorator {
  return (...args) => {
    Property({
      type: 'number',
      isIn,
      transform: true,
    })(...args);
  };
}
