import Icon from "@mdi/react";
import { mdiEarth } from "@mdi/js";
import { IUser } from "../../types";
import { useState } from "react";
import EditProfile from "./EditProfile";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useField";

const ProfileLeftSideBar = ({
  fullName,
  birthday,
  friends,
  createdAt,
  profileDescription,
}: IUser): JSX.Element => {
  const joined = new Date(`${createdAt}`).toDateString();
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const { id } = useParams();
  const auth = useAppSelector((state) => state.auth);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [proDesc, setProDesc] = useState<string>(profileDescription!);

  return (
    <aside className="flex flex-col gap-4 m-4 bg-white p-4 rounded h-fit">
      <section className="flex gap-4 items-center">
        <Icon path={mdiEarth} size={2} />
        <div className="flex flex-col">
          <h1 className="font-bold">Intro</h1>
        </div>
      </section>
      <p className="border-b border-slate-300 p-4">{fullName}</p>
      {proDesc ? <p className="p-2">{proDesc} </p> : null}

      <ul className="p-2">
        <li>Birthday: {birthday}</li>
        <li>Has {friends ? friends.length : 0} friend</li>
        <li>Joined on {joined}</li>
      </ul>
      {auth.id === id ? (
        <button
          className="bg-red-500 text-white rounded-lg w-16 col-span-3 mr-2 w-fit px-2"
          onClick={() => setEditProfileOpen(true)}
        >
          Edit Profile
        </button>
      ) : null}
      {editProfileOpen ? (
        <EditProfile setOpen={setEditProfileOpen} setProDesc={setProDesc} />
      ) : null}
    </aside>
  );
};

export default ProfileLeftSideBar;
