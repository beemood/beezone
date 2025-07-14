import type { Prisma } from '../../dist';

export class ProductData {
  static structure(): Record<string, string> {
    return {
      id: 'id',
      createdAt: 'createdAt',
      deletedAt: 'deletedAt',
      updatedAt: 'updatedAt',
      name: 'name',
      description: 'description',

      make: 'make',
      model: 'model',
      uuid: 'uuid',

      barcode: 'barcode',
      categoryId: 'categoryId',
    };
  }
  static columns() {
    return Object.keys(this.structure()).sort();
  }

  static data(): Prisma.ProductCreateInput[] {
    return [
      {
        name: 'Product 1',
        description: 'desc 1',
        barcode: '11111111111',
      },
      {
        name: 'Product 2',
        description: 'desc 2',
        barcode: '22222222222',
      },
      {
        name: 'Product 3',
        description: 'desc 3',
        barcode: '33333333333',
      },
      {
        name: 'Product 4',
        description: 'desc 4',
        barcode: '44444444444',
      },
      {
        name: 'Product 5',
        description: 'desc 5',
        barcode: '55555555555',
      },
    ];
  }

  static first() {
    return this.data()[0];
  }

  static last() {
    return this.data().pop()!;
  }
}
