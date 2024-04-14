import { z } from "zod";

export const processingloss = z.object({
  productionid: z.coerce.number(),
  name: z.string(),
  quantity: z.coerce.number(),
});

export type AddLoss = z.infer<typeof processingloss>;
