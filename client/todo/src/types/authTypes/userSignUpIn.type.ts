export interface SignInType {
  email: string;
  password: string;
}

export type SignInFormSchema = {
  name: keyof SignInType;
  label: string;
  type: string;
  placeholder: string;
};
