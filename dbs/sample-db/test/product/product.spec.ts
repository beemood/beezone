import { Prisma, PrismaClient, type Product } from '../../dist/index.js';

describe('ProductModel', () => {
  const columnsMap = {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    name: 'name',
  };
  const columns = Object.keys(columnsMap);

  const client = new PrismaClient();
  const repo = client.product;
  const data: Prisma.ProductCreateInput[] = [
    { name: 'Product 1' },
    { name: 'Product 2' },
    { name: 'Product 3' },
    { name: 'Product 4' },
    { name: 'Product 5' },
  ];
  let first: Product;
  let last: Product;
  let all: Product[];

  beforeAll(async () => {
    await repo.createMany({ data });
    first = (await repo.findFirst({})) as Product;
    last = (await repo.findFirst({ orderBy: { id: 'desc' } })) as Product;
    all = await repo.findMany();
  });

  afterAll(async () => {
    await repo.deleteMany();
  });

  it('should initialize repo', () => {
    expect(repo).toBeDefined();
  });

  it('should have columns', () => {
    expect(Prisma.ProductScalarFieldEnum).toEqual(columnsMap);
    expect(Object.keys(first || {})).toEqual(
      Object.keys(Prisma.ProductScalarFieldEnum)
    );

    for (const key of columns) {
      expect(first).toHaveProperty(key);
    }
  });

  it('should find all', async () => {
    expect(all).toHaveLength(5);
  });

  it('should find first', () => {
    expect(first.name).toEqual(data[0].name);
  });

  it('should find last', () => {
    expect(last.name).toEqual(data[4].name);
  });
});
