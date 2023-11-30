import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("O email está incorreto"),
  password: z.string().min(8),
});

export type TLoginData = z.infer<typeof loginSchema>;
