import { PrismaClient } from '../../dist/index.js';
import categories from '../data/categories.json' with { type: 'json' };

/**
 *
 * @param {PrismaClient} $client
 */
export async function seedCategories($client) {
  await $client.$transaction(async (client) => {
    for (const department of categories) {
      const savedDepartment = await client.department.create({
        data: { name: department.name },
        select: { id: true },
      });

      {
        const savedCategory = await client.category.create({
          data: { name: department.name, departmentId: savedDepartment.id },
        });
        await client.subCategory.create({
          data: { name: department.name, categoryId: savedCategory.id },
        });
      }

      if (!department.subcategories) {
        continue;
      }

      for (const category of department.subcategories) {
        const savedCategory = await client.category.create({
          data: { name: category.name, departmentId: savedDepartment.id },
        });
        
        {
          await client.subCategory.create({
            data: { name: savedCategory.name, categoryId: savedCategory.id },
          });
        }

        if (!category.subcategories) {
          continue;
        }

        for (const subCategory of category.subcategories) {
          await client.subCategory.create({
            data: { name: subCategory.name, categoryId: savedCategory.id },
          });
        }
      }
    }
  });
}
