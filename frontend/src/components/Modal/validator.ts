import { z } from "zod";

export const ModalSchema = z.object({
  name: z.string().min(1, "*Campo obrigatório"),
  email: z.string().min(1, "*Campo obrigatório").email("Deve ser um email"),
  telephone: z.string().min(11, "Deve ser um número de telefone válido"),
});

export type TModalSchema = z.infer<typeof ModalSchema>;
