import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().max(151, "Your name is too long"),
  email: z.string().email("Seu email está incorreto"),
  password: z.string(),
  telephone: z.string(),
});

export type TRegisterData = z.infer<typeof registerSchema>;
