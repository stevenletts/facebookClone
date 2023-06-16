import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";

const Layout = () => {
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
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
