import { z } from "zod";

export const ModalSchema = z.object({
  id: z.string(),
  full_name: z.string().min(1, "*Campo obrigatório"),
  email: z.string().min(1, "*Campo obrigatório").email("Deve ser um email"),
  telephone: z.string().length(11, "Deve ser um número de telefone válido"),
});

export type TModalSchema = z.infer<typeof ModalSchema>;
