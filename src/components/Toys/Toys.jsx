import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToysCard from "./ToyCard";

const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/toys.json")
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);
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
                <Tabs className="text-center w-full ">
                    <TabList className="flex justify-center  space-x-7 w-full">
                        <Tab className="btn btn-outline btn-accent">
                            Title 1
                        </Tab>
                        <Tab className="btn btn-outline btn-accent">
                            Title 2
                        </Tab>
                        <Tab className="btn btn-outline btn-accent">
                            Title 3
                        </Tab>
                        <Tab className="btn btn-outline btn-accent">
                            Title 4
                        </Tab>
                    </TabList>

                    <TabPanel className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                            {toys.map((toy) => (
                                <ToysCard key={toy.id} toy={toy}></ToysCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Toys;
