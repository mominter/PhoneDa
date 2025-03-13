import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OrderSlider = ({ images, onImageClick}) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
        >
            {images.map((imgSrc, index) => (
                <SwiperSlide key={index} onClick={() => onImageClick(imgSrc)}>
                    <img src={imgSrc} alt={`슬라이드 이미지 ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OrderSlider;