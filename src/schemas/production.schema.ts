import { z } from "zod";

export const production = z.object({
  name: z.string(),
  productiondate: z.string().datetime(),
  quantityprocessed: z.coerce.number(),
  quantityproduced: z.coerce.number(),
  machine: z.string(),
});

export type AddProduction = z.infer<typeof production>;
