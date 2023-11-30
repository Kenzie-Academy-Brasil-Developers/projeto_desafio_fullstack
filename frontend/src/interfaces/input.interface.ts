import { InputHTMLAttributes } from "react";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null | undefined;
  label: string;
  id: string;
}
