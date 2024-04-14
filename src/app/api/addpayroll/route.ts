// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Create an instance of Prisma Client
const prisma = new PrismaClient();

// Define the GET method for fetching employees
export const GET = async (req: NextRequest) => {
  try {
    const employees = await prisma.employee.findMany({
      select: {
        FirstName: true,
        MiddleName: true,
        LastName: true,
        EmployeeID: true,
      },
    });

    return NextResponse.json(
      employees.map((employee) => {
        return {
          name:
            employee.FirstName +
            " " +
            employee.MiddleName +
            " " +
            employee.LastName,
          ID: employee.EmployeeID,
        };
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

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
    const { name, overtime, noofday, daysabsent, sss, loan, from, to, empId } =
      await req.json();
    console.log(
      "Request body:",
      name,
      overtime,
      noofday,
      daysabsent,
      sss,
      loan,
      from,
      to
    );

    if (!name || !overtime || !noofday || !daysabsent || !sss) {
      return NextResponse.json(
        { error: "Invalid Request Body" },
        { status: 400 }
      );
    }

    const searchEmployee = await prisma.employee.findFirst({
      where: { EmployeeID: empId },
      select: {
        EmployeeID: true,
      },
    });

    if (!searchEmployee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    if (searchEmployee) {
      await prisma.payroll.create({
        data: {
          EmployeeID: searchEmployee.EmployeeID,
          Overtime: overtime,
          NumberofDays: noofday,
          DaysAbsent: daysabsent,
          SSS: sss,
          LoanDeduction: loan,
          DateFrom: from,
          DateTo: to,
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
