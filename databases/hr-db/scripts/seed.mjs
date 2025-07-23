export async function seed() {
  const { PrismaClient } = await import('./../dist/index.js');
  const { seedHrDb } = await import('./seeds/seed-hr-db.mjs');
  const client = new PrismaClient();

  await seedHrDb(client);
}
