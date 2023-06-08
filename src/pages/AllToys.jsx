import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchedToy, setSearchedToy] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/alltoys")
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    // FIXIT: implement search
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(searchInput);

        if (searchInput.length > 0) {
            const t = toys.filter((toy) => {
                if (toy.toy_name.search(searchInput)) {
                    return toy;
                }
            });
            // searchedToy(t)
            console.log(t);
        }
    };
    return (
        <div>
            <div className="container mx-auto flex items-center justify-between pb-4">
                <div>
                    Show{" "}
                    <select
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        name="cars"
                        id="cars"
                    >
                        <option className="text-xl " value="saab">
                            10
                        </option>
                        <option className="text-xl " value="opel">
                            15
                        </option>
                        <option className="text-xl " value="opel">
                            20
                        </option>
                        <option className="text-xl " value="opel">
                            25
                        </option>
                    </select>
                    Enteties
                </div>

                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        onChange={handleSearch}
                        type="text"
                        id="table-search"
                        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th data-priority="1">Serial</th>
                            <th data-priority="2">
                                Image, Doll Name & Catagory
                            </th>
                            <th data-priority="3">Seller Name & Email </th>
                            <th data-priority="4">Price</th>
                            <th data-priority="5">AvailAble Quantity</th>
                            <th data-priority="6">Rating</th>
                            <th data-priority="7">View Details</th>
                        </tr>
                    </thead>
                    {toys.slice(0, 10).map((toy, index) => {
                        return (
                            <tbody key={toy._id}>
                                <tr>
                                    <th>
                                        <label>{index + 1}</label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={toy.img}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {toy.toy_name}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {toy.sub_catagory}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {toy.seller_name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">
                                            {toy.seller_email}
                                        </span>
                                    </td>
                                    <td>{toy.price}</td>
                                    <td>{toy.available_quantity}</td>
                                    <td>
                                        <Rating
                                            value={toy.rating}
                                            style={{ maxWidth: 150 }}
                                            readOnly
                                        ></Rating>
                                    </td>
                                    <th>
                                        <Link
                                            to={`${(location.pathname =
                                                "/toy/")}${toy._id}`}
                                            className="btn btn-ghost "
                                        >
                                            View Details
                                        </Link>
                                    </th>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
                {/* foot */}
                <div>
                    <nav
                        className="flex items-center justify-between pt-4"
                        aria-label="Table navigation"
                    >
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                1-10
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {(toys.length / 10) * 10}
                            </span>
                        </span>
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    1
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default AllToys;
