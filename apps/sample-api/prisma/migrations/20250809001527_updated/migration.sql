-- CreateTable
CREATE TABLE "public"."Sample" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sample_name_key" ON "public"."Sample"("name");
