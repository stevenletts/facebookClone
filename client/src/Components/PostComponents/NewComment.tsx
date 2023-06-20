import { useState } from "react";
import TextAreaForm from "../TextAreaForm";
import { useAppSelector, useAppDispatch } from "../../hooks/useField";
import { handleNewComment } from "../../reducers/currentPostReducer";

const NewComment = ({ postId }: { postId: string }): JSX.Element => {
  const [comment, setComment] = useState("");
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(comment);
    dispatch(handleNewComment(comment, auth.id, postId));
    setComment("");
  };

  return (
    <TextAreaForm
      handleSubmit={handleSubmit}
      value={comment}
      placeholder="Type comment here"
      setValue={setComment}
      buttonText="comment"
    />
  );
};

export default NewComment;
