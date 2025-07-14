import { Property } from '../property/property.js';

export function SomeArrayDateProperty(): PropertyDecorator {
  return (...args) => {
    Property({
      type: 'array',
      items: {
        type: 'string',
        stringFormat: 'date',
      },
      transform: true,
    })(...args);
  };
}
