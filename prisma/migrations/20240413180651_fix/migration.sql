/*
  Warnings:

  - You are about to alter the column `ContactNumber` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `ContactNumber` INTEGER NULL;
