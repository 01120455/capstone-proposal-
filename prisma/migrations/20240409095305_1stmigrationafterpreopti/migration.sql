-- CreateTable
CREATE TABLE `Employee` (
    `EmployeeID` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `FirstName` VARCHAR(25) NOT NULL,
    `MiddleName` VARCHAR(25) NULL,
    `LastName` VARCHAR(25) NOT NULL,
    `LocationID` INTEGER NULL,
    `Position` VARCHAR(50) NOT NULL,
    `ContactNumber` VARCHAR(191) NULL,
    `HireDate` DATETIME(3) NOT NULL,
    `Status` ENUM('active', 'inactive') NOT NULL,
    `Salary` INTEGER NOT NULL,

    UNIQUE INDEX `Employee_username_key`(`username`),
    PRIMARY KEY (`EmployeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `SupplierID` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(50) NOT NULL,
    `MiddleName` VARCHAR(50) NOT NULL,
    `LastName` VARCHAR(50) NOT NULL,
    `ContactNumber` INTEGER NOT NULL,
    `LocationID` INTEGER NOT NULL,

    PRIMARY KEY (`SupplierID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Location` (
    `LocationID` INTEGER NOT NULL AUTO_INCREMENT,
    `Barangay` VARCHAR(50) NOT NULL,
    `City` VARCHAR(50) NOT NULL,
    `Province` VARCHAR(50) NULL,

    PRIMARY KEY (`LocationID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `CustomerID` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(50) NOT NULL,
    `MiddleName` VARCHAR(50) NOT NULL,
    `LastName` VARCHAR(50) NOT NULL,
    `ContactNumber` INTEGER NOT NULL,
    `LocationID` INTEGER NULL,

    PRIMARY KEY (`CustomerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sales` (
    `SalesID` INTEGER NOT NULL AUTO_INCREMENT,
    `CustomerID` INTEGER NOT NULL,
    `EmployeeID` INTEGER NOT NULL,
    `InvoiceNo` INTEGER NOT NULL,
    `Date` DATETIME(3) NOT NULL,
    `TotalAmount` DOUBLE NOT NULL,

    PRIMARY KEY (`SalesID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalesItem` (
    `SalesItemID` INTEGER NOT NULL AUTO_INCREMENT,
    `SalesID` INTEGER NOT NULL,
    `ItemID` INTEGER NOT NULL,
    `InventoryId` INTEGER NULL,
    `Quantity` INTEGER NOT NULL,
    `Weight` DOUBLE NULL,
    `PricePerUnit` DOUBLE NULL,

    PRIMARY KEY (`SalesItemID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Purchase` (
    `PurchaseID` INTEGER NOT NULL AUTO_INCREMENT,
    `SupplierID` INTEGER NOT NULL,
    `EmployeeID` INTEGER NOT NULL,
    `OfficialReceiptNo` INTEGER NULL,
    `Agent` VARCHAR(191) NULL,
    `Date` DATETIME(3) NOT NULL,
    `TotalAmount` DOUBLE NOT NULL,

    PRIMARY KEY (`PurchaseID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PurchaseItem` (
    `PurchaseItemID` INTEGER NOT NULL AUTO_INCREMENT,
    `PurchaseID` INTEGER NOT NULL,
    `itemID` INTEGER NOT NULL,
    `InventoryId` INTEGER NULL,
    `Quantity` INTEGER NOT NULL,
    `Weight` DOUBLE NULL,
    `PricePerUnit` DOUBLE NULL,

    PRIMARY KEY (`PurchaseItemID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `ItemID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NULL,
    `Type` VARCHAR(50) NOT NULL,
    `Quality` VARCHAR(191) NULL,
    `Variety` VARCHAR(191) NULL,

    PRIMARY KEY (`ItemID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inventory` (
    `InventoryID` INTEGER NOT NULL AUTO_INCREMENT,
    `ItemID` INTEGER NOT NULL,
    `Acquisition` ENUM('Bought', 'Processed') NOT NULL,
    `Quantity` INTEGER NOT NULL,
    `Date` DATETIME(3) NULL,

    PRIMARY KEY (`InventoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payroll` (
    `PayrollID` INTEGER NOT NULL AUTO_INCREMENT,
    `EmployeeID` INTEGER NOT NULL,
    `RefNo` INTEGER NOT NULL,
    `Overtime` INTEGER NOT NULL,
    `NumberofDays` INTEGER NOT NULL,
    `DaysAbsent` INTEGER NOT NULL,
    `SSS` INTEGER NOT NULL,
    `Date` DATETIME(3) NOT NULL,
    `LoanDeduction` INTEGER NOT NULL,
    `DateFrom` DATETIME(3) NULL,
    `DateTo` DATETIME(3) NULL,

    PRIMARY KEY (`PayrollID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Expense` (
    `ExpenseID` INTEGER NOT NULL AUTO_INCREMENT,
    `EmployeeID` INTEGER NOT NULL,
    `Date` DATETIME(3) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Amount` DOUBLE NOT NULL,

    PRIMARY KEY (`ExpenseID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_LocationID_fkey` FOREIGN KEY (`LocationID`) REFERENCES `Location`(`LocationID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Supplier` ADD CONSTRAINT `Supplier_LocationID_fkey` FOREIGN KEY (`LocationID`) REFERENCES `Location`(`LocationID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_LocationID_fkey` FOREIGN KEY (`LocationID`) REFERENCES `Location`(`LocationID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_CustomerID_fkey` FOREIGN KEY (`CustomerID`) REFERENCES `Customer`(`CustomerID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_EmployeeID_fkey` FOREIGN KEY (`EmployeeID`) REFERENCES `Employee`(`EmployeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesItem` ADD CONSTRAINT `SalesItem_SalesID_fkey` FOREIGN KEY (`SalesID`) REFERENCES `Sales`(`SalesID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesItem` ADD CONSTRAINT `SalesItem_ItemID_fkey` FOREIGN KEY (`ItemID`) REFERENCES `Item`(`ItemID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesItem` ADD CONSTRAINT `SalesItem_InventoryId_fkey` FOREIGN KEY (`InventoryId`) REFERENCES `Inventory`(`InventoryID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_SupplierID_fkey` FOREIGN KEY (`SupplierID`) REFERENCES `Supplier`(`SupplierID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_EmployeeID_fkey` FOREIGN KEY (`EmployeeID`) REFERENCES `Employee`(`EmployeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseItem` ADD CONSTRAINT `PurchaseItem_PurchaseID_fkey` FOREIGN KEY (`PurchaseID`) REFERENCES `Purchase`(`PurchaseID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseItem` ADD CONSTRAINT `PurchaseItem_itemID_fkey` FOREIGN KEY (`itemID`) REFERENCES `Item`(`ItemID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseItem` ADD CONSTRAINT `PurchaseItem_InventoryId_fkey` FOREIGN KEY (`InventoryId`) REFERENCES `Inventory`(`InventoryID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_ItemID_fkey` FOREIGN KEY (`ItemID`) REFERENCES `Item`(`ItemID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payroll` ADD CONSTRAINT `Payroll_EmployeeID_fkey` FOREIGN KEY (`EmployeeID`) REFERENCES `Employee`(`EmployeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Expense` ADD CONSTRAINT `Expense_EmployeeID_fkey` FOREIGN KEY (`EmployeeID`) REFERENCES `Employee`(`EmployeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;
