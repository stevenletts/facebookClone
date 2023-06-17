import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import PostComments from "./PostComments";

const Post = (): JSX.Element => {
  return (
    <div className="m-4 bg-white rounded flex flex-col gap-2">
      <section className="flex gap-4 items-center p-2">
        <Icon path={mdiAccountCircle} size={2} />
        <div className="flex flex-col">
          <h1 className="font-bold">Name of User</h1>
          <p>posted 50 minutes ago</p>
        </div>
      </section>

      <p className="p-2">this is where the post content goes</p>
      <div className="flex gap-4 items-center text-blue-600 p-2">
        <button>Like</button>
        <button>Comment</button>
      </div>
      <PostComments />
    </div>
  );
};

export default Post;
