import { Property } from '../property/property.js';

export function SortDirProperty(): PropertyDecorator {
  return (...args) => {
    Property({ type: 'string', isIn: ['asc', 'desc'], defaultValue: 'asc' })(
      ...args
    );
  };
}
