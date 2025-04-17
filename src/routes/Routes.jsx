import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../components/home/Home.jsx";
import Register from "../components/user/Register.jsx";
import NewProjectRegister from "../components/containers/projects/NewProject.jsx";
import PageNotFound from "../components/error/PageNotFound.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/projects/register",
    element: <NewProjectRegister />,
  },
  {
    path: "/projects/edit/:id",
    element: <Register />,
  },
  {
    path: "/projects/delete/:id",
    element: <Register />,
  },

  {
    path: "/home",
    element: <Home />,
  },
]);
