import LeftSideBar from "../Components/HomePageComponents/LeftSideBar";
import MainSection from "../Components/MainSection";
import RightSideBar from "../Components/HomePageComponents/RightSideBar";

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
