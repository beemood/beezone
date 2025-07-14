import { client } from './data/client';

export default async function teardown() {
  await client.category.deleteMany();
  await client.product.deleteMany();
  await client.sample.deleteMany();
}
