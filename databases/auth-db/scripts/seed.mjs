export async function seed() {
  const { PrismaClient } = await import('./../dist/index.js');
  const { seedAuthDb } = await import('./seeds/seed-auth-db.mjs');
  const client = new PrismaClient();

  await seedAuthDb(client);
}
