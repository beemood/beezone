import { Property } from '../property/property.js';

export function SomeBooleanProperty(): PropertyDecorator {
  return (...args) => {
    Property({ type: 'boolean', defaultValue: true })(...args);
  };
}
