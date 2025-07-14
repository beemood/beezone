import { Property } from '../property/property.js';

export function SomeArrayStringProperty(isIn?: string[]): PropertyDecorator {
  return (...args) => {
    Property({
      type: 'array',
      items: { type: 'string', isIn },
      transform: true,
    })(...args);
  };
}
