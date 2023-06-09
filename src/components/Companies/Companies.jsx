import Marquee from "react-fast-marquee";
import company01 from "../../assets/images/companies/company-logo-01.png";
import company02 from "../../assets/images/companies/company-logo-02.png";
import company03 from "../../assets/images/companies/company-logo-03.png";
import company04 from "../../assets/images/companies/company-logo-04.png";
import company05 from "../../assets/images/companies/company-logo-05.png";
import company06 from "../../assets/images/companies/company-logo-06.png";
import company07 from "../../assets/images/companies/company-logo-07.png";
import company08 from "../../assets/images/companies/company-logo-08.png";
import company09 from "../../assets/images/companies/company-logo-09.png";

const Companies = () => {
    return (
        <div className="my-24">
            <Marquee>
                <img src={company01} alt="company logo" />
                <img src={company02} alt="company logo" />
                <img src={company03} alt="company logo" />
                <img src={company09} alt="company logo" />
                <img src={company04} alt="company logo" />
                <img src={company05} alt="company logo" />
                <img src={company08} alt="company logo" />
                <img src={company06} alt="company logo" />
                <img src={company07} alt="company logo" />
            </Marquee>
        </div>
    );
};

export default Companies;
