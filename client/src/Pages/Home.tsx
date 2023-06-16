import LeftSideBar from "../Components/LeftSideBar";
import MainSection from "../Components/MainSection";
import RightSideBar from "../Components/RightSideBar";

const Home = (): JSX.Element => {
  return (
    <div className="grid grid-cols-4 mt-10">
      <LeftSideBar />
      <MainSection />
      <RightSideBar />
    </div>
  );
};

export default Home;
