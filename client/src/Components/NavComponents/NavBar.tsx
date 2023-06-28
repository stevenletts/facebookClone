import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import NotificationIcons from "./NotificationIcons";
import { logout } from "../../reducers/authReducer";
import { useAppDispatch } from "../../hooks/useField";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
    dispatch(logout());
  };
  return (
    <div className="bg-blue-600 fixed w-full top-0 z-[1]">
      <nav className="flex items-center w-11/12 mx-auto h-10 justify-evenly">
        <Link to="/">
          <Icon path={mdiHome} size={1.25} color="white" />
        </Link>
        <SearchBar />
        <NotificationIcons />
        <button
          className="bg-red-500 text-white rounded-lg w-16"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
