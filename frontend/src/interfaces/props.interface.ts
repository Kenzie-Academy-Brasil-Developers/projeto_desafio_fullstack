import { InputHTMLAttributes, ReactNode } from "react";
import { IContact } from "./context.interface";

export interface IContactItemProps {
  name: string;
  tel: string;
}

export interface AuthContextProps {
  children: ReactNode;
}

export interface RegisterContextProps {
  children: ReactNode;
}

export interface IDashboardListItem {
  number: number;
  info: IContact;
}

export interface IFieldsetProps {
  label: string;
  info: string;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null | undefined;
  label?: string;
  id: string;
}

export interface ModalProps {
  toggleModal: () => void;
}

export interface IModalFields {
  name: string;
  email: string;
  telephone: string;
}
