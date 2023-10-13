import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },

        ]
    },
    {
        path: "/auth",
        element: <><Outlet /></>,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
        ]
    },
]);


export default router;