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

export interface User {
  userName: string;
  userEmail: string;
  id: string;
  token: string;
}

export interface Teachers {
  avatar_url: string;
  experience: string;
  lesson_info: string;
  lessons_done: number;
  name: string;
  price_per_hour: number;
  rating: number;
  surname: string;
  conditions: [];
  languages: [];
  levels: [];
  reviews: [];
}

export interface Reviews {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
}

export interface TeacherData {
  avatar_url: string;
  name: string;
  surname: string;
}

export interface FormDataReason {
  reason: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}
