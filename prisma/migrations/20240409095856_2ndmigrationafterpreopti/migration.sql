/*
  Warnings:

  - You are about to alter the column `Name` on the `item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `Quality` on the `item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `Variety` on the `item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `item` MODIFY `Name` VARCHAR(50) NULL,
    MODIFY `Quality` VARCHAR(50) NULL,
    MODIFY `Variety` VARCHAR(50) NULL;
