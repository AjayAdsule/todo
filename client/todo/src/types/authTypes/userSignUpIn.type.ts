export interface SignUpType {
  email: string;
  password: string;
}

export type SignFormSchema = {
  name: keyof SignUpType;
  label: string;
  type: string;
  placeholder: string;
};
