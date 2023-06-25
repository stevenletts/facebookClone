import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import PostComments from "./PostComments";
import { IPost } from "../../types";
import formatDistance from "date-fns/formatDistance";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useField";
import { likePost, removeLikePost } from "../../reducers/currentPostReducer";

const Post = ({
  comments,
  createdAt,
  likes,
  post,
  user,
  id,
}: IPost): JSX.Element => {
  const dateStr = formatDistance(new Date(createdAt), new Date());
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handlePostLike = () => {
    if (likes.find((id) => id === auth.id)) {
      dispatch(removeLikePost(id, auth.id));
      return;
    }
    dispatch(likePost(id, auth.id));
  };

  return (
    <div className="m-4 bg-white rounded flex flex-col gap-2">
      <section className="flex gap-4 items-center p-2">
        <Icon path={mdiAccountCircle} size={2} />
        <div className="flex flex-col">
          <Link to={`/profile/${user.id}`}>
            <h1 className="font-bold">{user.fullName}</h1>
          </Link>
          <p>{dateStr}</p>
        </div>
      </section>

      <p className="p-2">{post}</p>
      <div className="flex gap-4 items-center text-blue-600 p-2">
        <button onClick={handlePostLike}>Like</button>
      </div>
      <PostComments likes={likes} comments={comments} postId={id} />
    </div>
  );
};

export default Post;
