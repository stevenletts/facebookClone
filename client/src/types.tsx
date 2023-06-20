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
  token?: string;
  fullName?: string;
  birthday?: string;
  id?: string;
  friends?: string[];
  posts?: string[];
  createdAt?: string;
}

export interface UserDetails {
  fullName: string;
  id: string;
}

export interface CommentType {
  comment: string;
  createdAt: string;
  likes: string[];
  postId: string;
  user: UserDetails;
  id: string;
}

export interface PostType {
  post: string;
  comments: CommentType[];
  id: string;
  likes: string[];
  createdAt: string;
  user: User;
}
