import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Banner.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const bannerImages = [
  "https://i.ibb.co/dGX895K/01.jpg",
  "https://i.ibb.co/HgPVSWd/02.jpg",
  "https://i.ibb.co/hDsvhyV/03.png",
  "https://i.ibb.co/ZYRSqK8/04.jpg",
  "https://i.ibb.co/fYJTPWx/05.png",
  "https://i.ibb.co/nkH9Xmq/06.png",
];

const sliderImage = bannerImages.map((bannerImage, index) => (
  <SwiperSlide key={index}>
    <img src={bannerImage} />
  </SwiperSlide>
));
export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {sliderImage}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {sliderImage}
      </Swiper>
    </>
  );
}
