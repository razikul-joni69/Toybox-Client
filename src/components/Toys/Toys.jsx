import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ToysCard from "./ToyCard";

const Toys = () => {
    const [toys, setToys] = useState([]);
    const [catagorigedToys, setCatagorigedToys] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/alltoys")
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
                <h2 className="text-3xl md:text-5xl font-bold">
                    Our Popular Toys
                </h2>
            </div>
            <div>
                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    className="text-center w-full "
                >
                    <TabList
                        onClick={handleSelect}
                        className="flex justify-center  space-x-7 w-full"
                    >
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 0
                                    ? "btn btn-error"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            All Dolls
                        </Tab>
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 1
                                    ? "btn btn-error"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            Barbie Dolls
                        </Tab>
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 2
                                    ? "btn btn-error"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            American Dolls
                        </Tab>
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 3
                                    ? "btn btn-error"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            Rag Dolls
                        </Tab>
                        <Tab
                            className={`focus:outline-none ${
                                tabIndex === 4
                                    ? "btn btn-error"
                                    : "btn btn-outline btn-error"
                            }`}
                        >
                            Fashion Dolls
                        </Tab>
                    </TabList>

                    <TabPanel className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                        {toys.map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                        {catagorigedToys.map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                        {catagorigedToys.map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                        {catagorigedToys.map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                        {catagorigedToys.map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Toys;
