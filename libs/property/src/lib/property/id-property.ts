import { Property } from './property.js';

export function IdProperty(): PropertyDecorator {
  return (...args) => {
    Property({ type: 'integer', required: true, minimum: 1 })(...args);
  };
}
