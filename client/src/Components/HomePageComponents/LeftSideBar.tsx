import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiAccountCircle } from "@mdi/js";
import { useAppSelector } from "../../hooks/useField";

const LeftSideBar = (): JSX.Element => {
  const user = useAppSelector((state) => state.auth);

  const liStyle = "hover:scale-110 hover:translate-x-5";

  return (
    <aside className="flex flex-col gap-4 m-4 ">
      <section className="flex gap-4 items-center">
        <Icon path={mdiAccountCircle} size={3} />
        <div className="flex flex-col">
          <h1 className="font-bold">{user.fullName}</h1>
          <Link to={`/profile/${user.id}`}>
            <p>View Profile</p>
          </Link>
        </div>
      </section>
      <section>
        <h1 className="font-bold pb-2">Pages</h1>
        <ul>
          <li className={liStyle}>
            <Link to="/">
              <p>News Feed</p>
            </Link>
          </li>
          <li className={liStyle}>
            <a href="">Messages</a>
          </li>
          <li className={liStyle}>
            <p>Friends</p>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default LeftSideBar;
