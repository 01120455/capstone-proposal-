import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hireDate = new Date().toISOString();

  const newEmployee = await prisma.employee.create({
    data: {
      username: "admin",
      password: "admin",
      FirstName: "Admin",
      MiddleName: "Admin",
      LastName: "Admin",
      Position: "Admin",
      ContactNumber: "09123456789",
      HireDate: hireDate,
      Status: "active",
      Salary: 0,
    },
  });
  console.log("New Employee created:", newEmployee);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
