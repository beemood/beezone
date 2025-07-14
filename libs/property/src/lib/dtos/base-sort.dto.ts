import type { SortPropertyDto } from './sort-property-dto.js';
import type { Sort } from '@beezone/types';
import { SomeSortProperty } from '../special/some-sort-property.js';
import { SortDirProperty } from '../special/sort-dir-property.js';

export class BaseSortDto {
  @SortDirProperty() id?: Sort;
  @SomeSortProperty() createdAt?: SortPropertyDto;
  @SomeSortProperty() updatedAt?: SortPropertyDto;
  @SomeSortProperty() deletedAt?: SortPropertyDto;
}
