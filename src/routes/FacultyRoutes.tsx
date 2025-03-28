import CreateFaculty from "../pages/faculty/CreateFaculty";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";

export const FacultyRoutes = [
    {
        index:true,
        element:<FacultyDashboard/>
    },
    {
        path:'create-faculty',
        element:<CreateFaculty/>
    },
]