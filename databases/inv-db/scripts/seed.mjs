export async function seed() {
  const { PrismaClient } = await import('./../dist/index.js');
  const { seedCategories } = await import('./seeds/seed-categories.mjs');
  const { seedProducts } = await import('./seeds/seed-products.mjs');
  const { seedStores } = await import('./seeds/seed-stores.mjs');
  const { seedPriceLevels } = await import('./seeds/seed-price-levels.mjs');

  const client = new PrismaClient();
  await seedPriceLevels(client);

  await seedStores(client);

  await seedCategories(client);

  await seedProducts(client);
}
