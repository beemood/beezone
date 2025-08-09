-- CreateTable
CREATE TABLE "public"."PriceLevel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PriceLevel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PriceLevel_name_key" ON "public"."PriceLevel"("name");
