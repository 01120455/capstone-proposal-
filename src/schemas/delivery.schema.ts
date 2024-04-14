import { date, z } from "zod";

export const delivery = z.object({
  plateno: z.coerce.number(),
  invoiceno: z.coerce.number(),
  empname: z.string(),
  quantity: z.coerce.number(),
  weight: z.coerce.number(),
  date: z.string().datetime(),
});

export type AddDelivery = z.infer<typeof delivery>;
