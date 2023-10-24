import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import Admin from "../Admin/Admin";
import Dashboard from "../AdminComponents/DashBoard/Dashboard";
import User from "../AdminComponents/User/User";
import Doctors from "../AdminComponents/Doctors/Doctors";
import AddDoctor from "../AdminComponents/AddData/AddDoctor/AddDoctor";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<SignIn></SignIn>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin></Admin>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'user',
        element: <User></User>

      },
      {
        path: 'doctors',
        element: <Doctors></Doctors>
      },
      {
        path: 'adddoctor',
        element:<AddDoctor></AddDoctor>
      }
    ]
  }
]);