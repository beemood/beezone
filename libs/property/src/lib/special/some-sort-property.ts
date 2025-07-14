import { SortPropertyDto } from '../dtos/sort-property-dto.js';
import { SomeObjectProperty } from './some-object-property.js';

export function SomeSortProperty(): PropertyDecorator {
  return (...args) => {
    SomeObjectProperty(() => SortPropertyDto)(...args);
  };
}
