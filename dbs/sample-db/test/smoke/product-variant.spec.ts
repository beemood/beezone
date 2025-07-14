import type { Product } from '../../dist/index.js';
import { Prisma, type ProductVariant as Model } from '../../dist/index.js';
import { ProductVariantData as Data } from '../data/product-variant-data.js';
import { client } from '../data/client.js';

describe('ProductVariant', () => {
  const repo = client.productVariant;
  const productRepo = client.product;

  let firstProduct: Product;

  let first: Model;
  let last: Model;
  let all: Model[];

  beforeAll(async () => {
    first = (await repo.findFirst({})) as Model;
    last = (await repo.findFirst({ orderBy: { id: 'desc' } })) as Model;
    all = await repo.findMany();
    firstProduct = (await productRepo.findFirst()) as Product;
  });

  it('should initialize repo', () => {
    expect(repo).toBeDefined();
  });

  it('should have columns', () => {
    expect(Prisma.ProductVariantScalarFieldEnum).toEqual(Data.structure());
    expect(Object.keys(first || {}).sort()).toEqual(Data.columns());
  });

  it('should find all', async () => {
    expect(all).toHaveLength(5);
  });

  it('should find first', () => {
    const entries = Object.entries(Data.first(firstProduct.id));
    for (const [key, value] of entries) {
      expect(value?.toString()).toEqual(first[key].toString());
    }
  });

  it('should find last', () => {
    const entries = Object.entries(Data.last(firstProduct.id));
    for (const [key, value] of entries) {
      expect(value?.toString()).toEqual(last[key].toString());
    }
  });
});
