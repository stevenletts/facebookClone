import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import { CommentType } from "../../types";
import { Link } from "react-router-dom";
import formatDistance from "date-fns/formatDistance";
import { useAppDispatch, useAppSelector } from "../../hooks/useField";
import {
  handleRemoveLikeComment,
  handleLikeComment,
} from "../../reducers/currentPostReducer";

const Comment = ({
  comment,
  createdAt,
  id,
  likes,
  user,
  postId,
}: CommentType): JSX.Element => {
  const dateStr = formatDistance(new Date(createdAt), new Date());
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleCommentLike = () => {
    if (likes.find((id) => id === auth.id)) {
      dispatch(handleRemoveLikeComment(id, postId, auth.id));
      return;
    }
    dispatch(handleLikeComment(id, postId, auth.id));
  };

  return (
    <div className="mb-2 flex-col">
      <section className="flex gap-2">
        <Icon path={mdiAccountCircle} size={1} />
        <p>
          <Link to={`/profile/${user.id}`}>{user.fullName}</Link> {comment}
        </p>
      </section>
      <div className="flex gap-2 pl-1">
        <p className="text-slate-600">{dateStr}</p>
        <button className="text-blue-600" onClick={handleCommentLike}>
          like
        </button>
        <p>{likes.length}</p>
      </div>
    </div>
  );
};

export default Comment;
