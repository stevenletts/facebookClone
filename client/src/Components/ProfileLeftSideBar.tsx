import Icon from "@mdi/react";
import { mdiEarth } from "@mdi/js";
import { User } from "../types";

const ProfileLeftSideBar = ({
  fullName,
  birthday,
  friends,
  createdAt,
}: User): JSX.Element => {
  const joined = new Date(`${createdAt}`).toDateString();

  return (
    <aside className="flex flex-col gap-4 m-4 bg-white p-4 rounded h-fit">
      <section className="flex gap-4 items-center">
        <Icon path={mdiEarth} size={2} />
        <div className="flex flex-col">
          <h1 className="font-bold">Intro</h1>
        </div>
      </section>
      <p className="border-b border-slate-300 p-4">{fullName}</p>
      <ul className="p-2">
        <li>Birthday: {birthday}</li>
        <li>Has {friends ? friends.length : 0} friend</li>
        <li>Joined on {joined}</li>
      </ul>
    </aside>
  );
};

export default ProfileLeftSideBar;
