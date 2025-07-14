import { Property } from '../property/property.js';

export function SomeDateProperty(): PropertyDecorator {
  return (...args) => {
    Property({ type: 'string', stringFormat: 'date' })(...args);
  };
}
