import { date, z } from "zod";

export const customer = z.object({
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
});
export type AddCustomer = z.infer<typeof customer>;
