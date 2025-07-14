import { SortOrderDto } from './order-property-dto.js';
import type { Sort } from '@beezone/types';
import { SomeSortProperty } from '../special/some-sort-property.js';
import { SortProperty } from '../special/sort-property.js';

export class BaseSortDto {
  @SortProperty() id?: Sort;
  @SomeSortProperty() createdAt?: SortOrderDto;
  @SomeSortProperty() updatedAt?: SortOrderDto;
  @SomeSortProperty() deletedAt?: SortOrderDto;
}
