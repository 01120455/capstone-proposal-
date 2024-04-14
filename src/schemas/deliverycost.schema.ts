import { z } from "zod";

export const deliverycost = z.object({
  deliveryid: z.coerce.number(),
  cost: z.coerce.number(),
  desc: z.string(),
});

export type AddDeliveryCost = z.infer<typeof deliverycost>;
