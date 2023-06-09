import Countdown from "react-countdown";
import img1 from "../../assets/images/offers/offer-01.png";
import img2 from "../../assets/images/offers/offer-02.png";
import img3 from "../../assets/images/offers/offer-03.png";
import img4 from "../../assets/images/offers/offer-04.png";

const Offers = () => {
    const Completionist = () => <span>The Offer Sale is End Now!</span>;
    return (
        <div className="mt-20">
            <div className="text-center space-y-3 ">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Offer Sale is On Air
                </h1>
                <p className="text-xl text-gray-500">
                    Grab your favourite toys before the sales end. <br />
                    Offer will ended...
                </p>
            </div>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
                className="flex justify-center text-4xl md:text-6xl text-error my-8"
            >
                <Countdown
                    className="bg-white p-5 shadow-lg rounded-lg"
                    date={Date.now() + 2560100000}
                >
                    <Completionist />
                </Countdown>
            </div>
            <div className=" container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                <img
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className="rounded-md cursor-pointer w-full"
                    src={img1}
                    alt="Offer Image"
                />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    className="rounded-md cursor-pointer w-full"
                    src={img2}
                    alt="Offer Image"
                />
                <img
                    data-aos="flip-down"
                    data-aos-duration="2000"
                    className="rounded-md cursor-pointer w-full"
                    src={img3}
                    alt="Offer Image"
                />
                <img
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="rounded-md cursor-pointer w-full"
                    src={img4}
                    alt="Offer Image"
                />
            </div>
        </div>
    );
};

export default Offers;
