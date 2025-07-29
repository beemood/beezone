/* eslint-disable @typescript-eslint/no-unused-vars */
import { Operation, Prisma, PrismaClient } from '../../dist/index.js';

/**
 *
 * @param {PrismaClient} $client
 */
export async function seedAuthDb($client) {
  await $client.$transaction(async (client) => {
    const models = Object.keys(Prisma.ModelName.AccessToken);
    const operations = Object.keys(Operation);

    for (const resouce of models) {
      for (const operation of operations) {
        await client.permission.create({ data: { resouce, operation } });
      }
    }

    await client.role.create({ data: { name: 'Admin' } });
    await client.role.create({ data: { name: 'Root' } });

    await client.user.createMany({
      data: [
        {
          password: '!Password123',
          username: 'root',
        },
        {
          password: '!Password123',
          username: 'admin',
        },
      ],
    });
  });
}
