import ProfileLeftSideBar from "../Components/ProfileLeftSideBar";
import MainSection from "../Components/MainSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userService from "../services/userService";
import { User } from "../types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useField";
import { handleLoadPosts } from "../reducers/currentPostReducer";
import { handleAddFriend, handleRemoveFriend } from "../reducers/authReducer";

const Profile = (): JSX.Element => {
  const { id } = useParams();
  const auth = useAppSelector((state) => state.auth);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isFriend = auth.friends?.includes(id as string);

  const buttonText = isFriend ? "Remove" : "Add";

  const addFriend = () => {
    console.log("isFriend", isFriend);

    if (!isFriend) {
      dispatch(handleAddFriend(auth.id, id as string));
      return;
    }
    dispatch(handleRemoveFriend(auth.id, id as string));
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userService.getOne(id as string);
        setUser(fetchedUser);
        dispatch(handleLoadPosts(id));
      } catch (error) {
        console.log(error);
        navigate(-1);
      }
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-10">
      <div className="relative">
        <img
          src="/src/assets/defaultCover.jpeg"
          alt="default cover photo that is a picture of Lake Lugano"
          className="w-full h-[320px] relative"
        ></img>
        <div className="absolute bottom-1.5 right-1.5 ">
          {auth.id === id ? null : (
            <button className="bg-white p-2 border-r-2" onClick={addFriend}>
              {buttonText}
            </button>
          )}
          <button className="bg-white p-2">Message</button>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <ProfileLeftSideBar {...user} />
        <MainSection />
      </div>
    </div>
  );
};

export default Profile;
