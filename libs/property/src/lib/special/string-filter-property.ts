import { StringFilterDto } from '../dtos/string-filter.dto.js';
import { SomeObjectProperty } from './some-object-property.js';

export function StringFilterProperty(): PropertyDecorator {
  return (...args) => {
    SomeObjectProperty(() => StringFilterDto)(...args);
  };
}
