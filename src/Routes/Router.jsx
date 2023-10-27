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
import UserDashboard from "../UserDashBoardComponents/UserDashboard/UserDashboard";
import FindDoctor from "../components/FindDoctor/FindDoctor";
import DoctorDetails from "../components/DoctorDetails/DoctorDetails";
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
        path: 'finddoctor',
        element: <FindDoctor></FindDoctor>
      },
      {
        path: '/doctorDetails',
        element:<DoctorDetails></DoctorDetails>
      },
      {
        path: '/login',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
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
        path: 'userDashboard',
        element: <UserDashboard></UserDashboard>
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
        element: <AddDoctor></AddDoctor>
      }
    ]
  }
]);