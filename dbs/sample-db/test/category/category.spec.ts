import { Prisma, PrismaClient, type Category } from '../../dist/index.js';

describe('CategoryModel', () => {
  const columnsMap = {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    name: 'name',
  };
  const columns = Object.keys(columnsMap);

  const client = new PrismaClient();
  const repo = client.category;
  const data: Prisma.CategoryCreateInput[] = [
    { name: 'Category 1' },
    { name: 'Category 2' },
    { name: 'Category 3' },
    { name: 'Category 4' },
    { name: 'Category 5' },
  ];
  let first: Category;
  let last: Category;
  let all: Category[];

  beforeAll(async () => {
    await repo.createMany({ data });
    first = (await repo.findFirst({})) as Category;
    last = (await repo.findFirst({ orderBy: { id: 'desc' } })) as Category;
    all = await repo.findMany();
  });

  afterAll(async () => {
    await repo.deleteMany();
  });

  it('should initialize repo', () => {
    expect(repo).toBeDefined();
  });

  it('should have columns', () => {
    expect(Prisma.CategoryScalarFieldEnum).toEqual(columnsMap);
    expect(Object.keys(first || {})).toEqual(
      Object.keys(Prisma.CategoryScalarFieldEnum)
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
