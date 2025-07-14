/*
  Warnings:

  - You are about to drop the column `cost` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ProductAttribute` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ProductAttribute` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key,productVariantId]` on the table `ProductAttribute` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barcode` to the `Product` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `key` to the `ProductAttribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `ProductAttribute` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductAttribute" DROP CONSTRAINT "ProductAttribute_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariant" DROP CONSTRAINT "ProductVariant_productId_fkey";

-- DropIndex
DROP INDEX "Product_name_key";

-- DropIndex
DROP INDEX "ProductAttribute_productVariantId_name_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "departmentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cost",
DROP COLUMN "price",
ADD COLUMN     "barcode" TEXT NOT NULL,
ADD COLUMN     "make" TEXT NOT NULL DEFAULT 'Unkown',
ADD COLUMN     "model" TEXT NOT NULL DEFAULT 'Unkown',
ADD COLUMN     "uuid" TEXT NOT NULL,
ALTER COLUMN "description" SET DEFAULT 'Add product description';

-- AlterTable
ALTER TABLE "ProductAttribute" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "key" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAttribute_key_productVariantId_key" ON "ProductAttribute"("key", "productVariantId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAttribute" ADD CONSTRAINT "ProductAttribute_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
