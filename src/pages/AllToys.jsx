import { Rating } from "@smastrom/react-rating";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../components/Loading/Loading";
import NoToysFound from "../components/NoToysFound/NoToysFound";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState("");

    document.title = "TOYBOX | All Toys";

    useEffect(() => {
        fetch(
            `https://toybox-server-gamma.vercel.app/api/v1/alltoys?search=${search}&limit=20`
        )
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [search]);

    const handleToyLimit = (e) => {
        fetch(
            `https://toybox-server-gamma.vercel.app/api/v1/alltoys?search=&limit=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => setToys(data));
    };

    const handleToyDetails = (id) => {
        if (!user) {
            Swal.fire({
                title: "Are you sure You want to Login?",
                text: "🧸 You Have to Login First To View the toy details!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Goto Login Page!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`${(location.pathname = "/toy/")}${id}`);
                }
            });
        } else {
            navigate(`/toy/${id}`);
        }
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <div className="container space-y-3 mx-auto flex flex-wrap justify-center md:justify-between items-end my-5">
                <select
                    onChange={handleToyLimit}
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

                <input
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="🔍 Search Toys Here..."
                    className="input input-primary w-full max-w-xs"
                />
            </div>
            {toys.length <= 0 ? (
                <NoToysFound />
            ) : (
                <div>
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
                                                    onClick={() =>
                                                        handleToyDetails(
                                                            toy._id
                                                        )
                                                    }
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllToys;
