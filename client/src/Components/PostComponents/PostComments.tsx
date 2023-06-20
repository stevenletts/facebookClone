import Icon from "@mdi/react";
import { mdiThumbUp } from "@mdi/js";
import NewComment from "./NewComment";
import Comment from "./Comment";

const PostComments = ({
  likes,
  comments,
}: {
  likes: string[];
  comments: string[];
}): JSX.Element => {
  return (
    <div className="bg-gray-100 w-full p-2">
      <p className="border-b border-slate-200 w-full mb-2 flex gap-2">
        <Icon path={mdiThumbUp} size={1} />
        {likes.length}
      </p>

      <Comment />
      <Comment />

      <NewComment />
    </div>
  );
};

export default PostComments;
