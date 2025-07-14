import type { Sort, SortProperty, SortNulls } from '@beezone/types';
import { Dto } from '../property/dto.js';
import { Property } from '../property/property.js';

@Dto()
export class SortPropertyDto implements SortProperty {
  @Property({ type: 'string', isIn: ['asc', 'desc'], defaultValue: 'asc' })
  sort: Sort;
  @Property({ type: 'string', isIn: ['first', 'last'], defaultValue: 'first' })
  nulls?: SortNulls;
}
