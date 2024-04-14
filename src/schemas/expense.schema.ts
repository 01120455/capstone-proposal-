import { date, z } from "zod";

export const expense = z.object({
  empname: z.string(),
  expname: z.string(),
  date: z.string().datetime(),
  desc: z.string(),
  amount: z.coerce.number(),
});

export type AddExpense = z.infer<typeof expense>;
