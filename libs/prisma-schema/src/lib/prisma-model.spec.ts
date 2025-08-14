import { PrismaModel } from './prisma-model.js';

describe('PrismaModel', () => {
  it('should create prisma model', () => {
    expect(new PrismaModel({}).toString()).toEqual('');
  });
});
