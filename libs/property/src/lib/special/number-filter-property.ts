import { NumberFilterDto } from '../dtos/number-filter.dto.js';
import { SomeObjectProperty } from './some-object-property.js';

export function NumberFilterProperty(): PropertyDecorator {
  return (...args) => {
    SomeObjectProperty(() => NumberFilterDto)(...args);
  };
}
