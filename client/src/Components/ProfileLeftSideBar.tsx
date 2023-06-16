import Icon from "@mdi/react";
import { mdiEarth } from "@mdi/js";

const ProfileLeftSideBar = (): JSX.Element => {
  return (
    <aside className="flex flex-col gap-4 m-4 bg-white p-4 rounded h-fit">
      <section className="flex gap-4 items-center">
        <Icon path={mdiEarth} size={2} />
        <div className="flex flex-col">
          <h1 className="font-bold">Intro</h1>
        </div>
      </section>
      <p className="border-b border-slate-300  p-4">
        this is a description about someone
      </p>
      <ul>
        <li>joined on 25 december 2023</li>
        <li>has 1 friend</li>
        <li>works here</li>
      </ul>
    </aside>
  );
};

export default ProfileLeftSideBar;
