import type { QueryMode, StringFilter } from '@beezone/types';
import { SomeStringProperty } from '../special/some-string-property.js';
import { SomeArrayStringProperty } from '../special/some-array-string-property.js';
import { SomeObjectProperty } from '../special/some-object-property.js';
import { Dto } from '../property/dto.js';

@Dto()
export class StringFilterDto implements StringFilter {
  @SomeStringProperty() equals?: string;

  @SomeStringProperty() lt?: string;
  @SomeStringProperty() lte?: string;
  @SomeStringProperty() gt?: string;
  @SomeStringProperty() gte?: string;
  @SomeStringProperty() contains?: string;
  @SomeStringProperty() startsWith?: string;
  @SomeStringProperty() endsWith?: string;

  @SomeArrayStringProperty() in?: string[];
  @SomeArrayStringProperty() notIn?: string[];

  @SomeObjectProperty(() => StringFilterDto) not?: StringFilterDto;

  @SomeStringProperty(['default', 'insensitive']) mode?: QueryMode;
}
