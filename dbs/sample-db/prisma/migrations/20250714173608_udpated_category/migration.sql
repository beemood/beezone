-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_departmentId_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "departmentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
