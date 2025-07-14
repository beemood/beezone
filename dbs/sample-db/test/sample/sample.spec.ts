import { Prisma, PrismaClient, type Sample } from '../../dist/index.js';

describe('SampleModel', () => {
  const columnsMap = {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    name: 'name',
  };
  const columns = Object.keys(columnsMap);

  const client = new PrismaClient();
  const repo = client.sample;
  const data: Prisma.SampleCreateInput[] = [
    { name: 'Sample 1' },
    { name: 'Sample 2' },
    { name: 'Sample 3' },
    { name: 'Sample 4' },
    { name: 'Sample 5' },
  ];
  let first: Sample;
  let last: Sample;
  let all: Sample[];

  beforeAll(async () => {
    await repo.createMany({ data });
    first = (await repo.findFirst({})) as Sample;
    last = (await repo.findFirst({ orderBy: { id: 'desc' } })) as Sample;
    all = await repo.findMany();
  });

  afterAll(async () => {
    await repo.deleteMany();
  });

  it('should initialize repo', () => {
    expect(repo).toBeDefined();
  });

  it('should have columns', () => {
    expect(Prisma.SampleScalarFieldEnum).toEqual(columnsMap);
    expect(Object.keys(first || {})).toEqual(
      Object.keys(Prisma.SampleScalarFieldEnum)
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
