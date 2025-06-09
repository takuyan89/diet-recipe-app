/*
  Warnings:

  - Added the required column `amount` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `calories` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "amount" INTEGER NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "calories" SET NOT NULL;
