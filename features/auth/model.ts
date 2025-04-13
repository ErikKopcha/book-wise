import { FieldValues } from "react-hook-form";

export enum AUTH_FORM_TYPE {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
}

export interface IAuthForm<T extends FieldValues> {
  type: AUTH_FORM_TYPE;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

