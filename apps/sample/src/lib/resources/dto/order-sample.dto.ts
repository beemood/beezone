import { BaseSortDto, Dto, SortProperty } from '@beezone/property';
import type { Sort } from '@beezone/types';

@Dto()
export class OrderSampleDto extends BaseSortDto {
  @SortProperty() name?: Sort;
}
