import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Apropos from "../pages/Apropos";
import PropertyDetail from "../pages/PropertyDetail";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: "/apropos",
        element: <Apropos />,
        errorElement: <NotFound />
    },
    {
        path: "/propertydetail",
        element: <PropertyDetail />,
        errorElement: <NotFound />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default function RouterApp() {
    return <RouterProvider router={router} />;
}
