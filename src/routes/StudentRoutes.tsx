import CreateStudent from "../pages/student/CreateStudent";
import StudentDashboard from "../pages/student/StudentDashboard";

export const StudentRoutes = [
    {
        index:true,
        element:<StudentDashboard/>
    },
    {
        path:'create-student',
        element:<CreateStudent/>
    },
]