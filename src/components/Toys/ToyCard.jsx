import { Rating } from "@smastrom/react-rating";
import React from "react";

import "@smastrom/react-rating/style.css";

const ToysCard = ({ toy }) => {
    const {
        id,
        toy_name,
        toy_details,
        sub_catagory,
        img,
        seller_name,
        seller_email,
        price,
        rating,
        available_quantity,
    } = toy;
    console.log(toy);
    return (
        <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img
                    className=" rounded-t-lg h-[350px] w-full"
                    src={img}
                    alt="product image"
                />
            </div>
            <div className="px-5 py-5  bottom-0">
                <h5 className="text-2xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                    {toy_name}
                </h5>
                <div className="flex items-center mt-2.5 ">
                    <span className="text-2xl font-bold text-gray-700 dark:text-white">
                        {price}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                    <a
                        href="#"
                        className="text-black bg-[#f4d2b6] hover:bg-[#f4d2b6]  focus:outline-none font-bold rounded-lg text-md px-5 py-2.5 text-center "
                    >
                        Show Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;
