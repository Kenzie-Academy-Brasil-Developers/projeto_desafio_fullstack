import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "*Campo obrigatório")
    .email("O email está incorreto"),
  password: z.string().min(8, "Mínimo de 8 caracteres"),
});
