import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./AdminRoutes";
import { FacultyRoutes } from "./FacultyRoutes";
import { StudentRoutes } from "./StudentRoutes";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:adminRoutes
    },
    {
        path:'/faculty',
        element:<App/>,
        children:FacultyRoutes
    },
    {
        path:'/student',
        element:<App/>,
        children:StudentRoutes
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
])