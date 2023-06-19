import ProfileLeftSideBar from "../Components/ProfileLeftSideBar";
import MainSection from "../Components/MainSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userService from "../services/userService";
import { User } from "../types";
import { useNavigate } from "react-router-dom";

const Profile = (): JSX.Element => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userService.getOne(id as string);
        setUser(fetchedUser);
      } catch (error) {
        console.log(error);
        navigate(-1);
      }
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(user);

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
        <ProfileLeftSideBar {...user} />
        <MainSection posts={user?.posts} />
      </div>
    </div>
  );
};

export default Profile;
