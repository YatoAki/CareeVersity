
import CourseCard from "./CourseCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Slider = () => {

  return (
    <div className="card-container">
        <Swiper
            pagination={{
            type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><CourseCard/></SwiperSlide>
            <SwiperSlide><CourseCard/></SwiperSlide>
            <SwiperSlide><CourseCard/></SwiperSlide>
            <SwiperSlide><CourseCard/></SwiperSlide>
            <SwiperSlide><CourseCard/></SwiperSlide>
            <SwiperSlide><CourseCard/></SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Slider