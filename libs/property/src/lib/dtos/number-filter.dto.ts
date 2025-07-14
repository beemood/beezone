import type { NumberFilter } from '@beezone/types';
import { Dto } from '../property/dto.js';
import { SomeNumberProperty } from '../special/some-number-property.js';
import { SomeArrayNumberProperty } from '../special/some-array-number-property.js';
import { SomeObjectProperty } from '../special/some-object-property.js';

@Dto()
export class NumberFilterDto implements NumberFilter {
  @SomeNumberProperty() equals?: number;
  @SomeNumberProperty() lt?: number;
  @SomeNumberProperty() lte?: number;
  @SomeNumberProperty() gt?: number;
  @SomeNumberProperty() gte?: number;

  @SomeArrayNumberProperty() in?: number[];
  @SomeArrayNumberProperty() notIn?: number[];

  @SomeObjectProperty(() => NumberFilterDto) not?: NumberFilterDto;
}
