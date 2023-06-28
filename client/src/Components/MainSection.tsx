import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useField";
import NewPost from "./PostComponents/NewPost";
import Post from "./PostComponents/Post";
import { useEffect } from "react";
import { handleLoadNewsFeedPosts } from "../reducers/currentPostReducer";

const MainSection = ({
  fromProfilePage,
}: {
  fromProfilePage: boolean;
}): JSX.Element => {
  const posts = useAppSelector((state) => state.currentPosts);
  const auth = useAppSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!fromProfilePage) {
      dispatch(handleLoadNewsFeedPosts(auth.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-span-2">
      {auth.id === id || id === undefined ? <NewPost /> : null}
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default MainSection;
