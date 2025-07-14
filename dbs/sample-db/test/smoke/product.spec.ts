import { Prisma, type Product as Model } from '../../dist/index.js';
import { ProductData as Data } from '../data/product-data.js';
import { client } from '../data/client.js';

describe('Product', () => {
  const repo = client.product;

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
    expect(Prisma.ProductScalarFieldEnum).toEqual(Data.structure());
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
