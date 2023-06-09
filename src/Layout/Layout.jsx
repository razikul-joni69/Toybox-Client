import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
