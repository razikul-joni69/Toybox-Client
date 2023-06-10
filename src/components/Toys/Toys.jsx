import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import NoToysFound from "../NoToysFound/NoToysFound";
import ToysCard from "./ToyCard";

const Toys = () => {
    const [toys, setToys] = useState([]);
    const [catagorigedToys, setCatagorigedToys] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        fetch("https://toybox-server-gamma.vercel.app/api/v1/alltoys")
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    const handleSelect = (e) => {
        const query = e.target.innerText.split(" ")[0];
        const filteredToys = toys.filter((toy) => {
            if (toy.sub_catagory.toLowerCase() === query.toLowerCase()) {
                return toy;
            }
        });
        setCatagorigedToys(filteredToys);
    };
    return (
        <div className="container mx-auto my-24 space-y-5">
            <div className="text-center">
                <img
                    className="block mx-auto"
                    src="https://demo.ishithemes.com/opencart/OPC082/image/catalog/seperator.png"
                    alt=""
                />
                <div className="text-center space-y-3 ">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        AvailAble Toys
                    </h1>
                    <p className="text-xl text-gray-500">
                        See All of your favourites toys here.
                    </p>
                </div>
            </div>
            <div>
                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    className="text-center w-full "
                >
                    <TabList
                        onClick={handleSelect}
                        className="space-x-3 md:space-y-0 sm:space-y-3 md:flex justify-center  md:space-x-7 w-full"
                    >
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 0
                                    ? "btn btn-error text-white "
                                    : "btn btn-outline btn-error "
                            }`}
                        >
                            All Dolls
                        </Tab>
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 1
                                    ? "btn btn-error text-white"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            Barbie Dolls
                        </Tab>
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 2
                                    ? "btn btn-error text-white"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            American Dolls
                        </Tab>
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 3
                                    ? "btn btn-error text-white"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            Animals Dolls
                        </Tab>
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 4
                                    ? "btn btn-error text-white"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            Fashion Dolls
                        </Tab>
                    </TabList>

                    <TabPanel className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
                        {toys?.slice(0, 20).map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
                        {catagorigedToys.length > 0 ? (
                            catagorigedToys?.map((toy) => (
                                <ToysCard key={toy._id} toy={toy}></ToysCard>
                            ))
                        ) : (
                            <div className="col-span-4">
                                <NoToysFound />
                            </div>
                        )}
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
                        {catagorigedToys.length > 0 ? (
                            catagorigedToys?.map((toy) => (
                                <ToysCard key={toy._id} toy={toy}></ToysCard>
                            ))
                        ) : (
                            <div className="col-span-4">
                                <NoToysFound />
                            </div>
                        )}
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
                        {catagorigedToys.length > 0 ? (
                            catagorigedToys?.map((toy) => (
                                <ToysCard key={toy._id} toy={toy}></ToysCard>
                            ))
                        ) : (
                            <div className="col-span-4">
                                <NoToysFound />
                            </div>
                        )}
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
                        {catagorigedToys.length > 0 ? (
                            catagorigedToys?.map((toy) => (
                                <ToysCard key={toy._id} toy={toy}></ToysCard>
                            ))
                        ) : (
                            <div className="col-span-4">
                                <NoToysFound />
                            </div>
                        )}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Toys;
