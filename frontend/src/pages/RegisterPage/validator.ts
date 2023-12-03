import { z } from "zod";

export const registerSchema = z
  .object({
    full_name: z
      .string()
      .min(1, "*Campo obrigatório")
      .max(151, "Seu nome é muito longo"),
    email: z.string().email("Deve ser um email válido"),
    password: z
      .string()
      .min(8, "O campo deve conter ao menos 8 caracteres")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos uma letra número."),
    confirmPassword: z.string().min(1, "É necessário confirmar sua senha"),
    telephone: z.string().length(11, "Número inválido"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
