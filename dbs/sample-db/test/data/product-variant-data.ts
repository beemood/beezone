import type { Prisma } from '../../dist';

export class ProductVariantData {
  static structure(): typeof Prisma.ProductVariantScalarFieldEnum {
    return {
      id: 'id',
      createdAt: 'createdAt',
      deletedAt: 'deletedAt',
      updatedAt: 'updatedAt',
      productId: 'productId',
    };
  }
  static columns() {
    return Object.keys(this.structure()).sort();
  }

  static data(id: number): Prisma.ProductVariantCreateInput[] {
    return [
      {
        product: { connect: { id } },
        attributes: {
          createMany: {
            data: [
              { key: 'color', value: 'red' },
              { key: 'size', value: 'XL' },
            ],
          },
        },
      },
      {
        product: { connect: { id } },
        attributes: {
          createMany: {
            data: [
              { key: 'color', value: 'orange' },
              { key: 'size', value: 'XL' },
            ],
          },
        },
      },
      {
        product: { connect: { id } },
        attributes: {
          createMany: {
            data: [
              { key: 'color', value: 'teal' },
              { key: 'size', value: 'XL' },
            ],
          },
        },
      },
      {
        product: { connect: { id } },
        attributes: {
          createMany: {
            data: [
              { key: 'color', value: 'red' },
              { key: 'size', value: 'SM' },
            ],
          },
        },
      },
      {
        product: { connect: { id } },
        attributes: {
          createMany: {
            data: [
              { key: 'color', value: 'red' },
              { key: 'size', value: 'MD' },
            ],
          },
        },
      },
    ];
  }

  static first(id: number) {
    return this.data(id)[0];
  }

  static last(id: number) {
    return this.data(id).pop()!;
  }
}
