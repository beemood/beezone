import { SortOrderDto } from '../dtos/order-property-dto.js';
import { SomeObjectProperty } from './some-object-property.js';

export function SomeSortProperty(): PropertyDecorator {
  return (...args) => {
    SomeObjectProperty(() => SortOrderDto)(...args);
  };
}
