import { useState } from "react";

import Icon from "@mdi/react";
import { mdiTypewriter, mdiCamera } from "@mdi/js";

const NewPost = (): JSX.Element => {
  const [post, setPostText] = useState("");
  return (
    <div className="grid grid-cols-3 grid-rows-3 bg-white m-4 rounded h-32 ">
      <div className="font-bold p-2 flex items-center gap-2">
        <Icon path={mdiTypewriter} size={1} />
        <p>Update Status</p>
      </div>
      <div className="p-2 flex items-center col-span-2 border-l-2 border-t-slate-800 font-bold ">
        <Icon path={mdiCamera} size={1} />
        <p>Add Photos</p>
      </div>
      <section className="col-span-3 p-2 row-span-2">
        <textarea
          onChange={({ target }) => setPostText(target.value)}
          placeholder="what's on your mind?"
          className="bg-slate-200 rounded-lg w-full h-full pl-2 pt-2"
          value={post}
        ></textarea>
      </section>
    </div>
  );
};

export default NewPost;
