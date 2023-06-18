export interface TextAreaFormProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.SyntheticEvent) => void;
  buttonText: string;
  placeholder: string;
}
