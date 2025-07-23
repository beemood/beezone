export async function seed() {
  const { PrismaClient } = await import('./../dist/index.js');
  const { seedCrmDb } = await import('./seeds/seed-crm-db.mjs');
  const client = new PrismaClient();

  await seedCrmDb(client);
}
