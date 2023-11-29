import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/images/logo/logo.png";
import Loading from "../Loading/Loading";

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="backdrop-blur-xl sticky top-0 z-50">
            <div className="navbar  container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    className="focus:text-white focus:bg-black"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="focus:text-white focus:bg-black"
                                    to="/alltoys"
                                >
                                    All Toys
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="focus:text-white focus:bg-black"
                                    to="/add-toy"
                                >
                                    Add Toy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="focus:text-white focus:bg-black"
                                    to="/my-toys"
                                >
                                    My Toys
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs">Blogs</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-24 md:w-36" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-lg">
                        <li>
                            <NavLink
                                className="focus:text-white focus:bg-black"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="focus:text-white focus:bg-black"
                                to="/alltoys"
                            >
                                All Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="focus:text-white focus:bg-black"
                                to="/add-toy"
                            >
                                Add Toy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="focus:text-white focus:bg-black"
                                to="/my-toys"
                            >
                                My Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs">Blogs</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        // <div className="flex space-x-2">
                        //     <button className="btn btn-ghost btn-circle">
                        //         <svg
                        //             xmlns="http://www.w3.org/2000/svg"
                        //             className="h-5 w-5"
                        //             fill="none"
                        //             viewBox="0 0 24 24"
                        //             stroke="currentColor"
                        //         >
                        //             <path
                        //                 strokeLinecap="round"
                        //                 strokeLinejoin="round"
                        //                 strokeWidth="2"
                        //                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        //             />
                        //         </svg>
                        //     </button>
                        //     <label
                        //         tabIndex={0}
                        //         className="btn btn-ghost btn-circle"
                        //     >
                        //         <div className="indicator">
                        //             <svg
                        //                 xmlns="http://www.w3.org/2000/svg"
                        //                 className="h-5 w-5"
                        //                 fill="none"
                        //                 viewBox="0 0 24 24"
                        //                 stroke="currentColor"
                        //             >
                        //                 <path
                        //                     strokeLinecap="round"
                        //                     strokeLinejoin="round"
                        //                     strokeWidth="2"
                        //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        //                 />
                        //             </svg>
                        //             <span className="badge badge-sm indicator-item">
                        //                 8
                        //             </span>
                        //         </div>
                        //     </label>
                        <>
                            <Link className="btn btn-outline btn-error hidden">
                                Appoinment
                            </Link>
                            <div className="dropdown dropdown-end ">
                                <div>
                                    <label
                                        tabIndex={0}
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full ring-2 ring-error">
                                            {user?.photoURL ? (
                                                <img
                                                    src={user?.photoURL}
                                                    alt="user photo"
                                                />
                                            ) : (
                                                <img
                                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                                    alt="user photo"
                                                />
                                            )}
                                        </div>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <a className="justify-between">
                                                <span className="text-error">
                                                    {user?.displayName}
                                                </span>{" "}
                                                Profile
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a>Settings</a>
                                        </li> */}
                                        <li onClick={handleLogout}>
                                            <a>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : (
                        // </div>
                        <div className="space-x-2">
                            <Link
                                to="login"
                                className="btn btn-sm md:btn-md btn-outline btn-error "
                            >
                                Login
                            </Link>
                            <Link
                                to="register"
                                className="btn btn-sm md:btn-md btn-outline btn-error "
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
