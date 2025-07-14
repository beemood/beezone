import { DateFilterDto } from '../dtos/date-filter.dto.js';
import { SomeObjectProperty } from './some-object-property.js';

export function DateFilterProperty(): PropertyDecorator {
  return (...args) => {
    SomeObjectProperty(() => DateFilterDto)(...args);
  };
}
