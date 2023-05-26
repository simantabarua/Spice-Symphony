// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./ProductSlider.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import SectionHeader from "../../../../components/common/SectionHeader";

export default function ProductSlider() {
  const products = [
    { title: "Salad", image: "https://i.ibb.co/t2SR7r5/slide1.jpg" },
    { title: "Dessert", image: "https://i.ibb.co/vjDN61F/slide2.jpg" },
    { title: "Beverage", image: "https://i.ibb.co/DYkF1bg/slide3.jpg" },
    { title: "Appetizer", image: "https://i.ibb.co/2yNzc5J/slide4.jpg" },
    { title: "Salad", image: "https://i.ibb.co/t2SR7r5/slide1.jpg" },
  ];

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <SectionHeader
        title={"order online"}
        subtitle={"From 11:00am to 10:00pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="productSlider"
        breakpoints={breakpoints}
      >
        {products.map(({ title, image }, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={image} alt="" className="w-full slide-image" />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <h2 className="absolute bottom-10 inset-x-0 text-4xl font-bold text-white text-center">
                {title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
