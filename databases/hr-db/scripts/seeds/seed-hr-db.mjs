import { PrismaClient } from '../../dist/index.js';
import hrDbData from '../data/hr-db.json' with { type: 'json' };

/**
 *
 * @param {PrismaClient} $client
 */
export async function seedHrDb($client) {
  await $client.$transaction(async (client) => {

    for (const hrDb of hrDbData) {
      await client.hrDb.create({ data: { name: hrDb.name } });
    }
    
  });
}
