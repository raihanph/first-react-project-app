import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
        
            { index: true , Component : Home},
            { path: 'Products', Component: Products },
            { path: 'About', Component: About },
            { path: 'Blogs', Component: Blogs },
            { path : 'Contact', Component : Contact}
        ]
    }
]);

export default router;