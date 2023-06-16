import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NotificationIcons from "./NotificationIcons";

const NavBar = (): JSX.Element => {
  return (
    <div className="bg-blue-600 sticky">
      <nav className="flex items-center w-11/12 mx-auto h-10 justify-evenly">
        <Link to="/">
          <Icon path={mdiHome} size={1.25} color="white" />
        </Link>
        <SearchBar />
        <NotificationIcons />
        <button className="bg-red-500 text-white rounded-lg w-16">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
