import { useState } from "react";

import Icon from "@mdi/react";
import { mdiTypewriter, mdiCamera } from "@mdi/js";
import TextAreaForm from "../TextAreaForm";
import postService from "../../services/postService";
import { useAppSelector } from "../../hooks/useField";

const NewPost = (): JSX.Element => {
  const [post, setPostText] = useState("");
  const { id } = useAppSelector((state) => state.auth);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(post);
    postService.makePost(post, id);
    setPostText("");
  };
  return (
    <div className="grid grid-cols-3 grid-rows-3 bg-white m-4 rounded h-40 ">
      <div className="font-bold p-2 flex items-center gap-2">
        <Icon path={mdiTypewriter} size={1} />
        <p>Update Status</p>
      </div>
      <div className="p-2 flex items-center col-span-2 border-l-2 border-t-slate-800 font-bold ">
        <Icon path={mdiCamera} size={1} />
        <p>Add Photos</p>
      </div>
      <TextAreaForm
        handleSubmit={handleSubmit}
        value={post}
        placeholder="what's on your mind?"
        setValue={setPostText}
        buttonText="Post"
      />
    </div>
  );
};

export default NewPost;
