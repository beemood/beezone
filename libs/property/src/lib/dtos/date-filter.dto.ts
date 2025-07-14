import { DateTimeFilter } from '@beezone/types';
import { Dto } from '../property/dto.js';
import { SomeObjectProperty } from '../special/some-object-property.js';
import { SomeDateProperty } from '../special/some-date-property.js';
import { SomeArrayDateProperty } from '../special/some-array-date-property.js';

@Dto()
export class DateFilterDto implements DateTimeFilter {
  @SomeDateProperty() equals?: Date;
  @SomeDateProperty() lt?: Date;
  @SomeDateProperty() lte?: Date;
  @SomeDateProperty() gt?: Date;
  @SomeDateProperty() gte?: Date;

  @SomeObjectProperty(() => DateFilterDto) not?: DateFilterDto;

  @SomeArrayDateProperty() in?: Date[];
  @SomeArrayDateProperty() notIn?: Date[];
}
