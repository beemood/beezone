import { PrismaClient } from '../../dist/index.js';
import authDbData from '../data/auth-db.json' with { type: 'json' };

/**
 *
 * @param {PrismaClient} $client
 */
export async function seedAuthDb($client) {
  await $client.$transaction(async (client) => {

    for (const authDb of authDbData) {
      await client.authDb.create({ data: { name: authDb.name } });
    }
    
  });
}
