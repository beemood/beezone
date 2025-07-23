export async function seed() {
  const { PrismaClient } = await import('./../dist/index.js');
  const { seedCategories } = await import('./seeds/seed-categories.mjs');

  const client = new PrismaClient();
  await seedCategories(client);
}
