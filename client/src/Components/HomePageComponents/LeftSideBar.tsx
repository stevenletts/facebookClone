import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

const LeftSideBar = (): JSX.Element => {
  const liStyle = "hover:scale-110 hover:translate-x-5";

  return (
    <aside className="flex flex-col gap-4 m-4 ">
      <section className="flex gap-4 items-center">
        <Icon path={mdiAccountCircle} size={3} />
        <div className="flex flex-col">
          <h1 className="font-bold">Name of User</h1>
          <a href="">View Profile</a>
        </div>
      </section>
      <section>
        <h1 className="font-bold pb-2">Pages</h1>
        <ul>
          <li className={liStyle}>
            <a href="/">News Feed</a>
          </li>
          <li className={liStyle}>
            <a href="">Messages</a>
          </li>
          <li className={liStyle}>
            <a href="">Friends</a>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default LeftSideBar;
