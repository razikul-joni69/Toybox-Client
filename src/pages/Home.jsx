import BannarSection from "../components/BannerSection/BannerSection";
import Companies from "../components/Companies/Companies";
import Discount from "../components/Discount/Discount";
import Offers from "../components/Offers/Offers";
import Toys from "../components/Toys/Toys";

const Home = () => {
    document.title = "TOYBOX | Home";
    return (
        <div>
            <BannarSection />
            <Offers/>
            <Toys />
            <Discount/>
            <Companies/>
        </div>
    );
};

export default Home;
