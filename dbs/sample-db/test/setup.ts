import type { Product } from '../dist';
import { CategoryData } from './data/category-data';
import { client } from './data/client';
import { ProductData } from './data/product-data';
import { ProductVariantData } from './data/product-variant-data';
import teardown from './teardown';

export default async function setup() {
  await teardown();
  await client.category.createMany({ data: CategoryData.data() });
  await client.product.createMany({ data: ProductData.data() });

  const firstProduct = (await client.product.findFirst()) as Product;

  for (const data of ProductVariantData.data(firstProduct.id)) {
    await client.productVariant.create({ data });
  }
}
