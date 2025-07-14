import { BaseSortDto, Dto, SomeSortProperty } from '@beezone/property';
import type { Sort } from '@beezone/types';

@Dto()
export class OrderSampleDto extends BaseSortDto {
  @SomeSortProperty() name?: Sort;
}
