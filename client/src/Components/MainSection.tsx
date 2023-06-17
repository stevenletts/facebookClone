import NewPost from "./PostComponents/NewPost";
import Post from "./PostComponents/Post";

const MainSection = (): JSX.Element => {
  return (
    <div className="col-span-2">
      <NewPost />
      <Post />
    </div>
  );
};

export default MainSection;
