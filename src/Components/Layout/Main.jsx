import { Outlet } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
    
AOS.init();
const Main = () => {
   

    return (
        <div className="AllBg">
            <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
    );
};

export default Main;