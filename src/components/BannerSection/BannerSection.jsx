import leftBanner from "../../assets/images/banner/home-banner-left.webp";
import rightBanner2 from "../../assets/images/banner/home-banner-right-02.webp";
import rightBanner3 from "../../assets/images/banner/home-banner-right-03.webp";
import rightBanner from "../../assets/images/banner/home-banner-right.webp";

const BannarSection = () => {
    return (
        <div className="carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={rightBanner} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
                <div className="absolute text-gray-600 space-y-3 w-2/5 left-20 transform -translate-y-1/2 top-1/2">
                    <h1 className="text-5xl md:text-7xl">Lets Play All Day</h1>
                    <p>
                        Lets give your child his/her favourite toy. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Molestias
                        ipsam voluptate perspiciatis modi labore odio, inventore
                        rem veniam asperiores dolores sapiente, cumque nesciunt.
                        Blanditiis deserunt, iure impedit aliquam commodi
                        facilis sint.
                    </p>
                    <button className="btn btn-error">Shop Now</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={leftBanner} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
                <div className="absolute text-gray-900 space-y-3 w-2/5 right-20 transform -translate-y-1/2 top-1/2">
                    <h1 className="text-5xl md:text-7xl">Lets Play All Day</h1>
                    <p>
                        Lets give your child his/her favourite toy. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Molestias
                        ipsam voluptate perspiciatis modi labore odio, inventore
                        rem veniam asperiores dolores sapiente, cumque nesciunt.
                        Blanditiis deserunt, iure impedit aliquam commodi
                        facilis sint.
                    </p>
                    <button className="btn btn-error">Shop Now</button>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={rightBanner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
                <div className="absolute text-gray-100 space-y-3 w-2/5 left-20 transform -translate-y-1/2 top-1/2">
                    <h1 className="text-5xl md:text-7xl">Lets Play All Day</h1>
                    <p>
                        Lets give your child his/her favourite toy. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Molestias
                        ipsam voluptate perspiciatis modi labore odio, inventore
                        rem veniam asperiores dolores sapiente, cumque nesciunt.
                        Blanditiis deserunt, iure impedit aliquam commodi
                        facilis sint.
                    </p>
                    <button className="btn btn-error text-white">
                        Shop Now
                    </button>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={rightBanner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
                <div className="absolute text-gray-700 space-y-3 w-2/5 left-20 transform -translate-y-1/2 top-1/2">
                    <h1 className="text-5xl md:text-7xl">Lets Play All Day</h1>
                    <p>
                        Lets give your child his/her favourite toy. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Molestias
                        ipsam voluptate perspiciatis modi labore odio, inventore
                        rem veniam asperiores dolores sapiente, cumque nesciunt.
                        Blanditiis deserunt, iure impedit aliquam commodi
                        facilis sint.
                    </p>
                    <button className="btn btn-error">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default BannarSection;
