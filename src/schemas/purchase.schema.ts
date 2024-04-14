import { date, z } from "zod";

export const purchase = z.object({
  purchaseid: z.coerce.number(),
  empname: z.string(),
  suppname: z.string(),
  date: z.string().datetime(),
  totalamount: z.coerce.number(),
  itemid: z.coerce.number(),
  inventoryid: z.coerce.number(),
  quantity: z.coerce.number(),
  weight: z.coerce.number(),
  priceperunit: z.coerce.number(),
});

export type AddPurchase = z.infer<typeof purchase>;
