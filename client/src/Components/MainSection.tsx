import NewPost from "./NewPost";
import Post from "./Post";

const MainSection = (): JSX.Element => {
  return (
    <div className="col-span-2">
      <NewPost />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MainSection;
