import { PrismaModel } from './prisma-model.js';

describe('PrismaModel', () => {
  it('should create prisma model', () => {
    expect(
      new PrismaModel({
        name: 'sample',
        properties: {
          name: {
            type: 'string',
          },
        },
      }).toString()
    ).toEqual(['model Sample {', '  name String?', '}'].join('\n'));
  });
});
