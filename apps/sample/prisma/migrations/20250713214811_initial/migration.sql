-- CreateTable
CREATE TABLE "Sample" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sample_id_key" ON "Sample"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sample_name_key" ON "Sample"("name");
