import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddToy from "../components/AddToy/AddToy";
import NotFound from "../components/NotFound/NotFound";
import AllToys from "../pages/AllToys";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyToys from "../pages/MyToys";
import Register from "../pages/Register";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/toy/:id",
                element: (
                    <PrivateRoute>
                        <ToyDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "alltoys",
                element: <AllToys />,
            },
            {
                path: "add-toy",
                element: <AddToy />,
            },
            {
                path: "my-toys",
                element: (
                    <PrivateRoute>
                        <MyToys />
                    </PrivateRoute>
                ),
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
