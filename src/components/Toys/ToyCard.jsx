/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ToysCard = ({ toy }) => {
    const { id, toy_name, img, price, rating } = toy;

    return (
        <div>
            <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img
                        className=" rounded-t-lg h-[350px] w-full"
                        src={img}
                        alt="product image"
                    />
                </div>
                {/* FIXIT: set the card details in the end */}
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
                                to={`/toy/${id}`}
                                className="btn btn-error text-white"
                            >
                                Show Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;
