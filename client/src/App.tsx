import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

const Layout = () => {
  return (
    <div className="md:w-full mx-auto h-screen">
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
      // {
      //   path: "/profile/:id",
      //   element: <Profile />,
      // },
      // {
      //   path: "/explore",
      //   element: <Explore />,
      // },
      // {
      //   path: "/signin",
      //   element: <SignIn />,
      // },
      // {
      //   path: "/signout",
      //   element: <SignIn />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
