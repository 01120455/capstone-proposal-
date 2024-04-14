import { date, z } from "zod";

export const sales = z.object({
  salesid: z.coerce.number(),
  invoiceno: z.coerce.number(),
  empname: z.string(),
  custname: z.string(),
  date: z.string().datetime(),
  totalamount: z.coerce.number(),
  itemid: z.coerce.number(),
  inventoryid: z.coerce.number(),
  quantity: z.coerce.number(),
  weight: z.coerce.number(),
  priceperunit: z.coerce.number(),
});

export type AddSales = z.infer<typeof sales>;
