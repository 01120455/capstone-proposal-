import { date, z } from "zod";

export const payroll = z.object({
  // empid: z.number(),
  name: z.string(),
  overtime: z.coerce.number(),
  noofday: z.coerce.number(),
  daysabsent: z.coerce.number(),
  sss: z.coerce.number(),
  loan: z.coerce.number(),
  datefrom: z.coerce.date(),
  dateto: z.coerce.date(),
});

export type AddPayroll = z.infer<typeof payroll>;
