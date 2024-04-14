import { z } from "zod";

export const item = z.object({
  name: z.string(),
  type: z.string(),
  quality: z.string(),
  variety: z.string(),
  quantity: z.coerce.number(),
  acquisition: z
    .enum(["Bought", "Processed"], {
      invalid_type_error: "Invalid Type Recieved",
    })
    .default("Processed"),
});

export type AddItem = z.infer<typeof item>;
