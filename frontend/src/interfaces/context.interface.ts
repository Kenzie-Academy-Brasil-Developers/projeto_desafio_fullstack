import { z } from "zod";
import { registerSchema } from "../pages/RegisterPage/validator";
import { loginSchema } from "../pages/LoginPage/validator";

export type TRegisterData = z.infer<typeof registerSchema>;

export type TLoginData = z.infer<typeof loginSchema>;

export interface RegisterContextValues {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  addCount: () => void;
  removeCount: () => void;
}

export interface AuthContextValues {
  signIn: (data: TLoginData) => void;
  register: (data: TRegisterData) => void;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
}

export interface IUser {
  id: string;
  full_name: string;
  email: string;
  telephone: string;
  register_date: string;
}

export interface IContact {
  name: string;
  email: string;
  telephone: string;
}
