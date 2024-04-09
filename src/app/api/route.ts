import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const employee = await prisma.employee.findUnique({
      where: {
        username: username,
      },
    });
    if (employee && employee.password === password) {
      return new Response(
        JSON.stringify({ message: "Authentication successful" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Invalid username or password" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error authenticating employee:", error);
    return new Response(
      JSON.stringify({ message: "Error authenticating employee" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
