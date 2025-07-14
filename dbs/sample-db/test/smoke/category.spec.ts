import { Prisma, type Category as Model } from '../../dist/index.js';
import { CategoryData as Data } from '../data/category-data.js';
import { client } from '../data/client.js';

describe('Category', () => {
  const repo = client.category;

  let first: Model;
  let last: Model;
  let all: Model[];

  beforeAll(async () => {
    first = (await repo.findFirst({})) as Model;
    last = (await repo.findFirst({ orderBy: { id: 'desc' } })) as Model;
    all = await repo.findMany();
  });

  it('should initialize repo', () => {
    expect(repo).toBeDefined();
  });

  it('should have columns', () => {
    expect(Prisma.CategoryScalarFieldEnum).toEqual(Data.structure());
    expect(Object.keys(first || {}).sort()).toEqual(Data.columns());
  });

  it('should find all', async () => {
    expect(all).toHaveLength(5);
  });

  it('should find first', () => {
    const entries = Object.entries(Data.first());
    for (const [key, value] of entries) {
      expect(value?.toString()).toEqual(first[key].toString());
    }
  });

  it('should find last', () => {
    const entries = Object.entries(Data.last());
    for (const [key, value] of entries) {
      expect(value?.toString()).toEqual(last[key].toString());
    }
  });
});
