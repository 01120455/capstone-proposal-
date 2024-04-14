import { z } from "zod";

export const vehicle = z.object({
  plateno: z.coerce.number(),
  name: z.string(),
  capacity: z.coerce.number(),
});

export type AddVehicle = z.infer<typeof vehicle>;
