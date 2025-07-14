export type Sort = 'asc' | 'desc';
export type SortNulls = 'first' | 'last';

export class SortOrder {
  sort: Sort;
  nulls?: SortNulls;
}
