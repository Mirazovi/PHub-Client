import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/faculty/CreateFaculty";
import CreateStudent from "../pages/student/CreateStudent";

export const adminRoutes = [
    {
        index:true,
        element:<AdminDashboard/>
    },
    {
        path:'create-admin',
        element:<CreateAdmin/>
    },
    {
        path:'create-faculty',
        element:<CreateFaculty/>
    },
    {
        path:'create-student',
        element:<CreateStudent/>
    },
]