import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ErrorPage from "./ErrorPage"
import AppLayout from "../layout/AppLayout"

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
    }
])

export { router }