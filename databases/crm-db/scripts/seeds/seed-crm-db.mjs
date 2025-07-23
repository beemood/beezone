import { PrismaClient } from '../../dist/index.js';
import crmDbData from '../data/crm-db.json' with { type: 'json' };

/**
 *
 * @param {PrismaClient} $client
 */
export async function seedCrmDb($client) {
  await $client.$transaction(async (client) => {

    for (const crmDb of crmDbData) {
      await client.crmDb.create({ data: { name: crmDb.name } });
    }
    
  });
}
