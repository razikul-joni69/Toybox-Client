import { NavLink } from "react-router-dom";

const NoToysFound = () => {
    return (
        <div className="text-center my-20 text-error text 3xl md:text-5xl font-bold">
            <h1>No Toys Found</h1>
            <NavLink to="/add-toy" className="btn btn-error text-white">
                Add A New Toy
            </NavLink>
        </div>
    );
};

export default NoToysFound;
