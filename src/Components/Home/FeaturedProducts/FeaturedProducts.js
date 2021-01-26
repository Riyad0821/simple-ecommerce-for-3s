import React from 'react';
import './FeaturedProducts.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import toy1 from '../../../images/toy1.jpg';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const FeaturedProducts = () => {
    return (
        <div className="carousel-container">
            <h3 className="m-5">Featured Products</h3>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay="true"
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType="desktop"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <img src={toy1} alt="" />
                    <h5>Product 1</h5>
                </div>
                <div>
                    <img src={toy1} alt="" />
                    <h5>Product 2</h5>
                </div>
                <div>
                    <img src={toy1} alt="" />
                    <h5>Product 3</h5>
                </div>
                <div>
                    <img src={toy1} alt="" />
                    <h5>Product 4</h5>
                </div>
            </Carousel>;
            <hr />
        </div>
    );
};

export default FeaturedProducts;