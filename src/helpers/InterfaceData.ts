import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface FormData {
  userName?: string;
  userEmail: string;
  userPassword: string;
}

export interface InputAuthProps {
  name: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
}
