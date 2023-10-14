import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import UserProvider from "./context/UserProvider";
import ChatProvider from "./context/ChatProvider";

const router = createBrowserRouter([
    {
        element: <>
            <UserProvider>
                <ChatProvider>
                    <Outlet />
                </ChatProvider>
            </UserProvider>
        </>,
        children: [

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
        ]
    }
]);


export default router;