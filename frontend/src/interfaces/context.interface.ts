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
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  removeItem: (id: string) => void;
}

export interface IUser {
  id: string;
  full_name: string;
  email: string;
  telephone: string;
  register_date: string;
  contacts?: IContact[];
}

export interface IContact {
  full_name: string;
  email: string;
  telephone: string;
}
