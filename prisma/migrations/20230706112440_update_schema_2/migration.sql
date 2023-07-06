/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `recomended` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "imageUrl",
DROP COLUMN "recomended",
ADD COLUMN     "imagesUrl" TEXT[],
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false;
