import { useState } from "react";
import TextAreaForm from "../TextAreaForm";

const NewComment = (): JSX.Element => {
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(comment);
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
