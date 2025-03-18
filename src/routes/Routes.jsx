import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../components/home/Home.jsx";
import PageNotFound from "../components/error/PageNotFound.jsx";
import Sales from "../components/sale/Sales.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageNotFound />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
