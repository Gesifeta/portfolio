import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../components/home/Home.jsx";
import Register from "../components/user/Register.jsx";
import NewProjectRegister from "../components/containers/projects/NewProject.jsx";
import PageNotFound from "../components/error/PageNotFound.jsx";
import Modal from "../components/modal/Modal.jsx";
import Login from "../components/user/Login.jsx";
import NewSkill from "../components/containers/skills/NewSkill.jsx";
import NewExperience from "../components/containers/experiences/NewExperience.jsx";
import NewEducation from "../components/containers/educations/NewEducation.jsx";
import NewCertification from "../components/containers/certificates/NewCertification.jsx";
import NewBadge from "../components/containers/badges/NewBadge.jsx";

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
    path: "/login",
    element: <Login />,
  },

  {
    path: "/projects/register/new",
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
  // skills
  {
    path: "/skills/register/new",
    element: <NewSkill />,
  },
  {
    path: "/skills/edit/:id",
    element: <Register />,
  },
  {
    path: "/skills/delete/:id",
    element: <Register />,
  },
  //certifications

  {
    path: "/certifications/register/new",
    element: <NewCertification />,
  },
  {
    path: "/certifications/edit/:id",
    element: <Register />,
  },
  {
    path: "/certifications/delete/:id",
    element: <Register />,
  },
  // Badges
  {
    path: "/badges/register/new",
    element: <NewBadge />,
  },
  {
    path: "/badges/edit/:id",
    element: <Register />,
  },
  {
    path: "/badges/delete/:id",
    element: <Register />,
  },
  // Experiences
  {
    path: "/experiences/register/new",
    element: <NewExperience />,
  },
  {
    path: "/experiences/edit/:id",
    element: <Register />,
  },
  {
    path: "/experiences/delete/:id",
    element: <Register />,
  },
  // Education
  {
    path: "/educations/register/new",
    element: <NewEducation />,
  },
  {
    path: "/educations/edit/:id",
    element: <Register />,
  },
  {
    path: "/educations/delete/:id",
    element: <Register />,
  },

  // users
  {
    path: "/users/register/new",
    element: <Register />,
  },
  {
    path: "/users/edit/:id",
    element: <Register />,
  },
  {
    path: "/users/delete/:id",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/modal",
    element: <Modal />,
  },
]);
