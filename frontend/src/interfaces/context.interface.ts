import { z } from "zod";
import { registerSchema } from "../pages/RegisterPage/validator";
import { loginSchema } from "../pages/LoginPage/validator";
import { MouseEvent } from "react";
import { TModalSchema } from "../components/Modal/validator";

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
  contacts: TModalSchema[];
  setContacts: React.Dispatch<React.SetStateAction<TModalSchema[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  removeItem: (id: string) => void;
  modalUser: TModalSchema | null;
  setModalUser: React.Dispatch<React.SetStateAction<TModalSchema | null>>;
  getModalInfo: (e: MouseEvent) => void;
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: () => void;
}

export interface IUser {
  id: string;
  full_name: string;
  email: string;
  telephone: string;
  register_date: string;
  contacts?: TModalSchema[];
}
