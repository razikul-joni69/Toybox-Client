import BannarSection from "../components/BannerSection/BannerSection";
import Discount from "../components/Discount/Discount";
import Offers from "../components/Offers/Offers";
import Toys from "../components/Toys/Toys";

const Home = () => {
    return (
        <div>
            <BannarSection />
            <Offers/>
            <Toys />
            <Discount/>
        </div>
    );
};

export default Home;
