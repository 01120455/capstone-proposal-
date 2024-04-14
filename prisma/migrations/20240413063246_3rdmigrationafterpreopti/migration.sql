/*
  Warnings:

  - You are about to alter the column `Agent` on the `purchase` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `inventory` ADD COLUMN `ProductionID` INTEGER NULL;

-- AlterTable
ALTER TABLE `purchase` MODIFY `Agent` VARCHAR(50) NULL;

-- CreateTable
CREATE TABLE `Production` (
    `ProductionID` INTEGER NOT NULL AUTO_INCREMENT,
    `ItemID` INTEGER NOT NULL,
    `ProductionDate` DATETIME(3) NOT NULL,
    `QuantityProcessed` INTEGER NOT NULL,
    `QuantityProduced` INTEGER NULL,
    `MachineID` INTEGER NOT NULL,

    PRIMARY KEY (`ProductionID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProcessingLoss` (
    `LossID` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductionID` INTEGER NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Quantity` INTEGER NOT NULL,

    PRIMARY KEY (`LossID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Machine` (
    `MachineID` INTEGER NOT NULL AUTO_INCREMENT,
    `Type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`MachineID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicle` (
    `VehiclePlateNo` INTEGER NOT NULL,
    `VehicleName` VARCHAR(191) NOT NULL,
    `Capacity` DOUBLE NOT NULL,

    PRIMARY KEY (`VehiclePlateNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Delivery` (
    `DeliveryID` INTEGER NOT NULL AUTO_INCREMENT,
    `VehiclePlateNo` INTEGER NOT NULL,
    `SalesID` INTEGER NULL,
    `EmployeeID` INTEGER NOT NULL,
    `Quantity` INTEGER NOT NULL,
    `Weight` DOUBLE NULL,
    `DeliveryDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`DeliveryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeliveryCost` (
    `DeliveryCostID` INTEGER NOT NULL AUTO_INCREMENT,
    `DeliveryID` INTEGER NOT NULL,
    `Cost` DOUBLE NOT NULL,
    `Description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`DeliveryCostID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_ProductionID_fkey` FOREIGN KEY (`ProductionID`) REFERENCES `Production`(`ProductionID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Production` ADD CONSTRAINT `Production_ItemID_fkey` FOREIGN KEY (`ItemID`) REFERENCES `Item`(`ItemID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Production` ADD CONSTRAINT `Production_MachineID_fkey` FOREIGN KEY (`MachineID`) REFERENCES `Machine`(`MachineID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProcessingLoss` ADD CONSTRAINT `ProcessingLoss_ProductionID_fkey` FOREIGN KEY (`ProductionID`) REFERENCES `Production`(`ProductionID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_VehiclePlateNo_fkey` FOREIGN KEY (`VehiclePlateNo`) REFERENCES `Vehicle`(`VehiclePlateNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_SalesID_fkey` FOREIGN KEY (`SalesID`) REFERENCES `Sales`(`SalesID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_EmployeeID_fkey` FOREIGN KEY (`EmployeeID`) REFERENCES `Employee`(`EmployeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryCost` ADD CONSTRAINT `DeliveryCost_DeliveryID_fkey` FOREIGN KEY (`DeliveryID`) REFERENCES `Delivery`(`DeliveryID`) ON DELETE RESTRICT ON UPDATE CASCADE;
