/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import Loading from "../Loading/Loading";
import NoToysFound from "../NoToysFound/NoToysFound";

const ToysCard = ({ toy }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const { _id, toy_name, toy_img, price, rating } = toy;

    const handleToyDetails = (id) => {
        if (!user) {
            Swal.fire({
                title: "Are you sure You want to login?",
                text: "🧸 You Have to Login First To View the toy details!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Goto Login Page!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/toy/${id}`);
                }
            });
        } else {
            navigate(`/toy/${id}`);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            {toy ? (
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <div>
                        <img
                            className=" rounded-t-lg h-[350px] w-full"
                            src={toy_img}
                            alt="product image"
                        />
                    </div>
                    <div className="">
                        <div className="px-5 py-5   ">
                            <h5 className="text-2xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                                {toy_name}
                            </h5>
                            <div className="flex items-center mt-2.5 ">
                                <span className="text-2xl font-bold text-gray-700 dark:text-white">
                                    {price}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={rating}
                                    readOnly
                                />
                                <Link
                                    onClick={() => handleToyDetails(_id)}
                                    className="btn btn-error text-white"
                                >
                                    Show Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NoToysFound />
            )}
        </div>
    );
};

export default ToysCard;
