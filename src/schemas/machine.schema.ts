import { z } from "zod";

export const machine = z.object({
  type: z.string(),
});

export type AddMachine = z.infer<typeof machine>;
