import { Outlet } from "react-router";
import Footer from "./Footer";
import Navber from "./Navber";


const Root = () => {
    return (
        <div>
            
            <Navber />
            <Outlet/>
            <Footer/>
        </div>
  )
};

export default Root;
