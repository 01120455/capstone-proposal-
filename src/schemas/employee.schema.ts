import { date, z } from "zod";

export const employee = z.object({
  usernamename: z.string(),
  password: z.string(),
  firstname: z.string(),
  middlename: z.string(),
  lastname: z.string(),
  Barangay: z.string(),
  City: z.string(),
  Province: z.string(),
  position: z.string(),
  contactno: z.coerce.number(),
  hiredate: z.string().datetime(),
  status: z
    .enum(["Active", "Inactive"], {
      invalid_type_error: "Invalid Type Recieved",
    })
    .default("Active"),
  salary: z.coerce.number(),
});
export type AddEmployee = z.infer<typeof employee>;
