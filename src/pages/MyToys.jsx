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

    document.title = "TOYBOX | My Toys";

    useEffect(() => {
        let unsubscribe = fetch(
            `https://toybox-server-gamma.vercel.app/api/v1/my-toys?email=${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setToys(data));

        return () => {
            return unsubscribe;
        };
    }, [user, showModal]);

    const handleSortByPrice = (e) => {
        fetch(
            `https://toybox-server-gamma.vercel.app/api/v1/my-sorted-toys?email=${user?.email}&&sortingMethod=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => setToys(data));
    };

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
                fetch(
                    `https://toybox-server-gamma.vercel.app/api/v1/toys/delete-toy/${id}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                    .then((res) => {
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
                    <div className="container space-y-3 mx-auto flex flex-wrap justify-center md:justify-between items-end my-5">
                        <select
                            defaultValue={"selected"}
                            className="select select-primary w-full max-w-xs "
                        >
                            <option disabled hidden value="selected">
                                Select How Many Toys Want To Show
                            </option>
                            <option value="10">Display 10 Toys</option>
                            <option value="20">Display 20 Toys</option>
                            <option value="25">Display 25 Toys</option>
                            <option value="30">Display 30 Toys</option>
                            <option value="40">Display 40 Toys</option>
                            <option value="50">Display 50 Toys</option>
                        </select>

                        <select
                            onChange={handleSortByPrice}
                            className="select select-primary w-full max-w-xs my-4 lg:my-0"
                            defaultValue={"selected"}
                        >
                            <option disabled value="selected" hidden>
                                Sort Price By
                            </option>
                            <option value="1">Ascending</option>
                            <option value="-1">Descending</option>
                        </select>
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
