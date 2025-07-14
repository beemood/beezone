export type Sort = 'asc' | 'desc';
export type SortNulls = 'first' | 'last';

export class SortProperty {
  sort: Sort;
  nulls?: SortNulls;
}
