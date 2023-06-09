import { Rating } from "@smastrom/react-rating";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import EditToyModal from "../components/EditToyModal/EditToyModal";
import Loading from "../components/Loading/Loading";
import NoToysFound from "../components/NoToysFound/NoToysFound";

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { loading, user } = useContext(AuthContext);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(true);

    console.log();

    useEffect(() => {
        let unsubscribe = fetch(
            `http://localhost:5000/api/v1/my-toys?email=${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setToys(data));

        return () => {
            return unsubscribe;
        };
    }, [user, showModal]);

    const handleToyDelete = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this toy?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/api/v1/toys/delete-toy/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => {
                        console.log(res);
                        if (res.ok) {
                            let updatedToys = toys.filter(
                                (toy) => toy._id !== id
                            );
                            setToys(updatedToys);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your selected toy has been deleted.",
                                icon: "success",
                                timer: 1500,
                            });
                        }
                    })
                    .catch((err) => {
                        Swal.fire({
                            title: "Not Deleted!",
                            text: err.message,
                            icon: "error",
                        });
                    });
            }
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {toys.length > 0 ? (
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
                                // onChange={handleSearch}
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
                                    <th data-priority="3">
                                        Seller Name & Email{" "}
                                    </th>
                                    <th data-priority="4">Price</th>
                                    <th data-priority="5">
                                        AvailAble Quantity
                                    </th>
                                    <th data-priority="6">Rating</th>
                                    <th data-priority="7">Edit</th>
                                    <th data-priority="8">Delete</th>
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
                                                <label
                                                    onClick={() => {
                                                        setShowModal(true);
                                                        setModalData(toy);
                                                    }}
                                                    htmlFor="my_modal_6"
                                                    className="cursor-pointer"
                                                >
                                                    <img
                                                        src="https://img.icons8.com/?size=512&id=118958&format=png"
                                                        className="w-10"
                                                        alt=""
                                                    />
                                                </label>
                                            </th>

                                            <th>
                                                <Link className="">
                                                    <img
                                                        onClick={() =>
                                                            handleToyDelete(
                                                                toy._id
                                                            )
                                                        }
                                                        className="w-10"
                                                        src="https://img.icons8.com/?size=512&id=119057&format=png"
                                                        alt=""
                                                    />
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
                        <EditToyModal
                            toy={modalData}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    </div>
                </div>
            ) : (
                <NoToysFound />
            )}
        </>
    );
};

export default MyToys;
