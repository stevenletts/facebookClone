import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./Components/NavComponents/NavBar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import Messages from "./Pages/Messages";

const loggedIn = true;

const Layout = () => {
  if (!loggedIn) {
    return <SignIn />;
  }

  return (
    <div className="md:w-full mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
    // for debugging
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
