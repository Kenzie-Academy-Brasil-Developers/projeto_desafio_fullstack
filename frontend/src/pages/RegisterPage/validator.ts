import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, "*Campo obrigatório")
    .max(151, "Seu nome é muito longo"),
  email: z.string().email("*Campo obrigatório"),
  password: z.string().min(8, "O campo deve conter ao menos 8 caracteres"),
  telephone: z.string().min(1, "*Campo obrigatório"),
});

export type TRegisterData = z.infer<typeof registerSchema>;
