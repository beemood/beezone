import { prismaClient } from './prisma-client.js';

describe('prismaClient', () => {
  it('should work', () => {
    expect(prismaClient()).toEqual('prisma-client');
  });
});
