// Import necessary modules
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// Create an instance of Prisma Client
const prisma = new PrismaClient();

// Define the POST method for the API route
export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, type, quality, variety, quantity } = req.body;

      // Check if the item already exists in the Item table
      let item = await prisma.item.findFirst({
        where: { Name: { equals: name } },
      });

      if (!item) {
        // If the item doesn't exist, create a new one
        item = await prisma.item.create({
          data: {
            Name: name,
            Type: type,
            Quality: quality,
            Variety: variety,
          },
        });
      }

      // Check if the item already exists in the Inventory table
      const existingInventory = await prisma.inventory.findFirst({
        where: { ItemID: { equals: item.ItemID } },
      });

      if (existingInventory) {
        // If the item exists in the Inventory table, update the quantity
        await prisma.inventory.update({
          where: { InventoryID: existingInventory.InventoryID },
          data: {
            Quantity: existingInventory.Quantity + parseInt(quantity, 10),
          },
        });
      } else {
        // If the item doesn't exist in the Inventory table, create a new entry
        await prisma.inventory.create({
          data: {
            Item: { connect: { ItemID: item.ItemID } },
            Quantity: parseInt(quantity, 10),
            Acquisition: "Processed", // Provide a default value or adjust as necessary
          },
        });
      }

      // Send a success response
      res.status(200).json({ message: "Product added successfully" });
    } catch (error) {
      // Send an error response
      console.error("Error adding product:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
