import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const products = await prisma.inventory.findMany({
      select: {
        Item: {
          select: {
            Name: true,
            Type: true,
            Quality: true,
            Variety: true,
          },
        },
        Acquisition: true,
        Quantity: true,
      },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching inventory:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
