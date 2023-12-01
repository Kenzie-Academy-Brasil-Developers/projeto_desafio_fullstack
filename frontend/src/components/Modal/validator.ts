import { z } from "zod";

export const ModalSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type TModalSchema = z.infer<typeof ModalSchema>;
