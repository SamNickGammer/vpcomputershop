import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ErrorPage from "./ErrorPage"
import AppLayout from "../layout/AppLayout"
import AdminLayout from "../Admin/layout/AdminLayout"
import Dashboard from "../Admin/pages/Dashboard"
import AdminLogin from "../Admin/pages/AdminLogin"

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <div>About</div>,
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    },
    {
        path: 'admin',
        element: <AdminLayout/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path : "",
                element : <Dashboard/>
            },
            {
                path : 'login',
                element : <AdminLogin/>
            }
        ]
    }
])

export { router }