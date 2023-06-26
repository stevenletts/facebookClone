import Icon from "@mdi/react";
import { mdiThumbUp } from "@mdi/js";
import NewComment from "./NewComment";
import Comment from "./Comment";
import { IComment } from "../../types";

const PostComments = ({
  likes,
  comments,
  postId,
}: {
  likes: string[];
  comments: IComment[];
  postId: string;
}): JSX.Element => {
  return (
    <div className="bg-gray-100 w-full p-2">
      <p className="border-b border-slate-200 w-full mb-2 flex gap-2">
        <Icon path={mdiThumbUp} size={1} />
        {likes.length}
      </p>
      {comments.length > 0
        ? comments.map((comment) => (
            <Comment key={comment.id} {...comment} postId={postId} />
          ))
        : null}

      <NewComment postId={postId} />
    </div>
  );
};

export default PostComments;
