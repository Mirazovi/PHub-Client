import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";

export const adminRoutes = [
    {
        index:true,
        element:<AdminDashboard/>
    },
    {
        path:'create-admin',
        element:<CreateAdmin/>
    },
    
]