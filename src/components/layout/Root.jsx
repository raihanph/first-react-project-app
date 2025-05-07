import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber"


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
