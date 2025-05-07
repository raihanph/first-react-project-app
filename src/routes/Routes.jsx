import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import About from "../components/pages/About";
import Blogs from "../components/pages/Blogs";
import Contact from "../components/pages/Contact";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
        
            { index: true , Component : Home},
            { path: 'Products', Component: Products },
            { path: 'About', Component: About },
            { path: 'Blogs', Component: Blogs },
            { path: 'Contact', Component: Contact },
            { path: 'login', Component: Login },
            {path:'Register', Component:Register}
        ]
    }
]);

export default router;