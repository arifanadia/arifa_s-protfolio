import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ProjectsDetails, { loadProjects } from "../Pages/Projects/ProjectsDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage/>,
      children : [
        {
            path: "/",
            element : <Home></Home>
        },
        {
          path : "/project-details/:id",
          element :<ProjectsDetails></ProjectsDetails>,
          loader : loadProjects
      
        }
      ]
    },
  ]);

export default router;