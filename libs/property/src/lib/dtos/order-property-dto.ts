import type { Sort, SortOrder , SortNulls } from '@beezone/types';
import { Dto } from '../property/dto.js';
import { Property } from '../property/property.js';

@Dto()
export class SortOrderDto implements SortOrder  {
  @Property({ type: 'string', isIn: ['asc', 'desc'] }) sort: Sort;
  @Property({ type: 'string', isIn: ['first', 'last'] }) nulls?: SortNulls;
}
