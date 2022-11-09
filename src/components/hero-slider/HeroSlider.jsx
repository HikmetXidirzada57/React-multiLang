import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HeroSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img style={{width:"100%",height:"90vh",objectFit:"cover"}} src="https://images.pexels.com/photos/804572/pexels-photo-804572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:"100%",height:"90vh",objectFit:"cover"}} src="https://images.pexels.com/photos/95764/pexels-photo-95764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:"100%",height:"90vh",objectFit:"cover"}} src="https://images.pexels.com/photos/306002/pexels-photo-306002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width:"100%",height:"90vh",objectFit:"cover"}} src="https://images.pexels.com/photos/4678861/pexels-photo-4678861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
