export interface TextAreaFormProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.SyntheticEvent) => void;
  buttonText: string;
  placeholder: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpDetails {
  fullName: string;
  email: string;
  password: string;
  birthday: string;
}

export interface User {
  fullName?: string;
  birthday?: string;
  id?: string;
  friends?: string[];
  posts?: string[];
  createdAt?: string;
}
