import { trim } from '@beezone/is';
import { PrismaModelPrinter } from './prisma-model-printer.js';
describe('prismaModelPrinter', () => {
  it('should generate prisma model', () => {
    const printer = new PrismaModelPrinter({
      name: 'sample',
      properties: {
        id: { type: 'integer', generated: 'id' },
        createdAt: { type: 'date', generated: 'created-at' },
        updatedAt: { type: 'date', generated: 'updated-at' },
        deletedBy: { type: 'date', generated: 'deleted-at' },
        sample: {
          type: 'string',
        },
        price: { type: 'number', required: true },
      },
    });

    expect(printer.toString()).toEqual(
      trim(
        `
        model Sample { 
          id Int @id @default(autoincrement())
          createdAt DateTime @default(now())
          updatedAt DateTime? @updatedAt
          deletedBy DateTime?
          sample String? 
          price Decimal
        }
        `
      )
    );
  });
});
