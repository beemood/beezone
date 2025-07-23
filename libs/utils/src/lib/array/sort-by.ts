import { SortDir } from '@beezone/types';

export function sortBy<T, K extends keyof T>(
  property: K,
  sortOrder: SortDir = 'asc'
): (first: T, second: T) => number {
  const [greater, less] = sortOrder == 'asc' ? [1, -1] : [-1, 1];

  return (first, second) => {
    return first[property] > second[property]
      ? greater
      : first[property] === second[property]
      ? 0
      : less;
  };
}
