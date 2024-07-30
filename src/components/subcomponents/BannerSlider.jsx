import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testOne from "../../assets/bglogo.jpg";
import testTwo from "../../assets/homeless.webp";
import testThree from "../../assets/plan.jpg";
import testFour from "../../assets/build.png";

const BannerSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };


  return (
    <div className="carouselWrapper">
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="sliderImgCont">
          <img src={testOne} alt="testing" />
        </div>
        <div className="sliderImgCont">
          <img src={testTwo} alt="testing" />
        </div>
        <div className="sliderImgCont">
          <img src={testThree} alt="testing" />
        </div>
        <div className="sliderImgCont">
          <img src={testFour} alt="testing" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
