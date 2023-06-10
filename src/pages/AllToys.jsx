import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NoToysFound from "../components/NoToysFound/NoToysFound";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    // const [searchInput, setSearchInput] = useState("");
    // const [searchedToy, setSearchedToy] = useState([]);
    const location = useLocation();

    document.title = "TOYBOX | All Toys";

    useEffect(() => {
        fetch("https://toybox-server-gamma.vercel.app/api/v1/alltoys")
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    console.log(toys);

    // FIXIT: implement search
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    //     console.log(searchInput);

    //     if (searchInput.length > 0) {
    //         const t = toys.filter((toy) => {
    //             if (toy.toy_name.search(searchInput)) {
    //                 return toy;
    //             }
    //         });
    //         // searchedToy(t)
    //         console.log(t);
    //     }
    // };

    const handleToyLimit = (e) => {
        fetch(
            `https://toybox-server-gamma.vercel.app/api/v1/alltoys?limit=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => setToys(data));
    };
    return (
        <div>
            {toys.length <= 0 ? (
                <NoToysFound />
            ) : (
                <div>
                    <div className="container mx-auto flex justify-center md:justify-between items-center sm:my-5 justify-items-center lg:justify-between pb-4">
                        <select
                            onChange={handleToyLimit}
                            defaultValue={"selected"}
                            className="select select-primary w-full max-w-xs "
                        >
                            <option disabled hidden value="selected">
                                Select How Many Toys Want To Show
                            </option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Here..."
                                className="input input-bordered w-full  pr-40"
                            />

                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-sm md:table-md lg:table table-zebra">
                            <thead className="text-xs md:text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th data-priority="1">Serial</th>
                                    <th data-priority="2">
                                        Image, Doll Name & Catagory
                                    </th>
                                    <th data-priority="3">
                                        Seller Name & Email{" "}
                                    </th>
                                    <th data-priority="4">Price</th>
                                    <th data-priority="5">
                                        AvailAble Quantity
                                    </th>
                                    <th data-priority="6">Rating</th>
                                    <th data-priority="7">View Details</th>
                                </tr>
                            </thead>
                            {toys.map((toy, index) => {
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
                                                                src={
                                                                    toy.toy_img
                                                                }
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
                                            <span className="sr-only">
                                                Previous
                                            </span>
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
                                            <span className="sr-only">
                                                Next
                                            </span>
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
            )}
        </div>
    );
};

export default AllToys;
