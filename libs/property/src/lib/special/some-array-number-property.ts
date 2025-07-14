import { Property } from '../property/property.js';

export function SomeArrayNumberProperty(isIn?: number[]): PropertyDecorator {
  return (...args) => {
    Property({
      type: 'array',
      items: {
        type: 'number',
        isIn,
      },
      transform: true,
    })(...args);
  };
}
