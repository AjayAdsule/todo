export interface SignInType {
  email: string;
  password: string;
}

export interface SignUpType {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export type FormSchema<T> = {
  name: keyof T;
  label: string;
  type: string;
  placeholder: string;
};

// Usage
export type SignInFormSchema = FormSchema<SignInType>;
export type SignUpFormSchema = FormSchema<SignUpType>;
