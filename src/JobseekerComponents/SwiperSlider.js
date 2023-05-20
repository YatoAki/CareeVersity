import React, { useRef, useState } from "react";
// Import Swiper React components
import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
        <SwiperSlide><CourseCard/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperSlider