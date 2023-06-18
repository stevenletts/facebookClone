import ProfileLeftSideBar from "../Components/ProfileLeftSideBar";
import MainSection from "../Components/MainSection";

const Profile = (): JSX.Element => {
  return (
    <div className="mt-10">
      <div className="relative">
        <img
          src="/src/assets/defaultCover.jpeg"
          alt="default cover photo that is a picture of Lake Lugano"
          className="w-full h-[320px] relative"
        ></img>
        <div className="absolute bottom-1.5 right-1.5 ">
          <button className="bg-white p-2">Friends </button>
          <button className="bg-white p-2"> Message</button>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <ProfileLeftSideBar />
        <MainSection />
      </div>
    </div>
  );
};

export default Profile;
