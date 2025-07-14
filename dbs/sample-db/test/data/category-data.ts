import type { Prisma } from '../../dist';

export class CategoryData {
  static structure(): Record<string, string> {
    return {
      id: 'id',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deletedAt',
      name: 'name',
      departmentId: 'departmentId',
    };
  }

  static columns() {
    return Object.keys(this.structure()).sort();
  }

  static data(): Prisma.CategoryCreateInput[] {
    return [
      { name: 'cat 1' },
      { name: 'cat 2' },
      { name: 'cat 3' },
      { name: 'cat 4' },
      { name: 'cat 5' },
    ];
  }

  static first() {
    return this.data()[0]!;
  }

  static last() {
    return this.data().pop()!;
  }
}
