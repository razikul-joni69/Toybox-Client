const Discount = () => {
    return (
        <div>
            <div className="relative bg-fixed overflow-hidden h-screen rounded-lg bg-cover bg-no-repeat p-12 text-center bg-[url('https://demo.ishithemes.com/opencart/OPC082/image/catalog/parallaxbackground.png')]">
                <div className="absolute bg-[rgba(0, 0, 0, 0.6)] bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                    <div className="flex h-full justify-center lg:justify-start items-center ">
                        <div className="text-white space-y-5 lg:ml-10">
                            <h2 className="mb-4 text-4xl font-semibold">
                                New Kids Toy
                            </h2>
                            <h2 className="mb-4 text-8xl font-black">
                                Big Discount
                            </h2>
                            <button className="btn btn-success text-white text-xl">
                                Toy Store Super Sale. Get 50% Off
                            </button>{" "}
                            <br />
                            <button className="btn btn-error rounded-full text-white">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
