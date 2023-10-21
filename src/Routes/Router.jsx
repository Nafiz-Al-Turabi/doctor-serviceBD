import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import Admin from "../Admin/Admin";
import User from "../AdminComponents/User/User";
import Dashboard from "../AdminComponents/User/DashBoard/Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin></Admin>,
    children: [
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
        },
      {
        path: 'user',
        element: <User></User>

      }
    ]
  }
]);