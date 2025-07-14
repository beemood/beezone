import { Property } from '../property/property.js';

export function SortProperty(): PropertyDecorator {
  return (...args) => {
    Property({ type: 'string', isIn: ['asc', 'desc'] })(...args);
  };
}
