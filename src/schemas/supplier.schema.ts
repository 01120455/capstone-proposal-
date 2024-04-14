import { date, z } from "zod";

export const supplier = z.object({
  usernamename: z.string(),
  password: z.string(),
  firstname: z.string(),
  middlename: z.string(),
  lastname: z.string(),
  Barangay: z.string(),
  City: z.string(),
  Province: z.string(),
});
export type AddSupplier = z.infer<typeof supplier>;
