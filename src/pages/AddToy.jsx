import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../components/Loading/Loading";
import { showErrorMessage, showSuccessMessage } from "../utils/Notification";

const AddToy = () => {
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    const handleToySubmit = (e) => {
        e.preventDefault();
        const toy_name = e.target.toy_name.value;
        const toy_description = e.target.toy_description.value;
        const toy_img = e.target.toy_img.value;
        const seller_email = e.target.seller_email.value;
        const seller_name = e.target.seller_name.value;
        const available_quantity = e.target.available_quantity.value;
        const rating = e.target.rating.value;
        const price = e.target.price.value;
        const sub_catagory = e.target.sub_catagory.value;

        const newToy = {
            toy_name,
            sub_catagory,
            toy_description,
            toy_img,
            seller_name,
            seller_email,
            price: parseFloat(price),
            rating: parseFloat(rating),
            available_quantity: parseFloat(available_quantity),
        };

        fetch("http://localhost:5000/api/v1/add-toy", {
            method: "POST",
            body: JSON.stringify(newToy),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) {
                    e.target.reset();
                    showSuccessMessage("🧸 New Toy Added Successfully");
                }
            })
            .catch((err) => {
                showErrorMessage(err.message);
            });
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto ">
                <h2 className="mb-4 text-4xl text-center font-bold text-error md:text-5xl dark:text-white">
                    Add Your New Toy
                </h2>
                <form onSubmit={handleToySubmit}>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Toy Name
                            </label>
                            <input
                                type="text"
                                name="toy_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter Your Toy name"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="brand"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Sub Catagory
                            </label>
                            <input
                                type="text"
                                name="sub_catagory"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter Your Product SubCatagory"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="brand"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter Your Toy Price"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="brand"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Rating
                            </label>
                            <input
                                type="number"
                                name="rating"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Give A Initial Rating between 0 to 5"
                                required
                                min="1"
                                max="5"
                                step="0.1"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="available_quantity"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Give Your Availability Of Toys"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Seller Name
                            </label>
                            <input
                                type="text"
                                name="seller_name"
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={user?.displayName}
                                disabled
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Seller Email
                            </label>
                            <input
                                type="text"
                                name="seller_email"
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={user?.email}
                                disabled
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                PhotoUrl
                            </label>
                            <input
                                type="text"
                                name="toy_img"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter Your Toy PhotoURL"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="toy_description"
                                rows="8"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Write a Toy description here..."
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            type="submit"
                            className="text-white bg-error hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Add Toy
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddToy;
