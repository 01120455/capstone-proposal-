// Import necessary modules
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { error } from "console";

// There is an existing error where req.body is not being parsed correctly. where req.body contents Undefined in console log check for fix.

// Create an instance of Prisma Client
const prisma = new PrismaClient();

// Define the POST method for the API route
export const config = {
  api: {
    bodyParser: true, // Enable body parsing
  },
};

// Define the POST method for the API route
export const POST = async (req: Request) => {
  try {
    // Extract the required fields from the request body
    const { name, type, quality, variety, quantity } = await req.json();
    console.log("Request body:", name, type, quality, variety, quantity);

    // Validate the request body
    if (!name || !type || !quantity) {
      return NextResponse.json(
        { error: "Invalid Request Body" },
        { status: 400 }
      );
    }

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
    return NextResponse.json({ message: "Product added successfully" });
  } catch (error) {
    // Send an error response
    console.error("Error adding product:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
};

export const GET = async (res: Response) => {
  try {
    const items = await prisma.inventory.findMany({
      // select: {
      //   Acquisition: true,
      // },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error(error);
  }
};
