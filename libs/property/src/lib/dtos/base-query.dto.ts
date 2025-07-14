import { SomePositiveIntProperty } from '../special/some-positive-int-property.js';

export class BaseQueryDto {
  @SomePositiveIntProperty() take?: number;
  @SomePositiveIntProperty() skip?: number;
}
