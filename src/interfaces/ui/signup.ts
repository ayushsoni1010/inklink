export interface SignUpDataType {
  email: string;
  password: string;
}

export interface SignUpErrorType {
  isError: boolean;
  errorEmailMessage: string;
  errorPasswordMessage: string;
}
