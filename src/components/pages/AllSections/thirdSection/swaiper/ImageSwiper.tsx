"use client";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";
import first_photo from "@/images/third_section_1.png";
import second_photo from "@/images/third_section_2.png";
import scss from "./ImageSwiper.module.scss";
import arrow from "@/images/third_section_arrow.png";

function ImageSwiper() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  // Функция для перехода на следующий слайд
  const handleNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext(); // Переход к следующему слайду
    }
  };

  return (
    <div className={scss.content}>
      <div className={scss.swiperContainer}>
        <Swiper
          modules={[Scrollbar, A11y]} // Убираем Pagination из модулей
          spaceBetween={15} // Расстояние между слайдами
          slidesPerView={2} // Отображаем по одному слайду
          onSwiper={(swiper) => setSwiperInstance(swiper)} // Сохраняем экземпляр Swiper
          onSlideChange={() => console.log("slide change")} // Лог смены слайда
          style={{ maxWidth: "600px", width: "100%", margin: "0 auto" }}
          className={scss.mySwiper}
        >
          <SwiperSlide>
            <Image src={first_photo} alt="Dish 1" width={266} height={281} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={second_photo} alt="Dish 2" width={266} height={280} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={second_photo} alt="Dish 2" width={266} height={280} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={second_photo} alt="Dish 2" width={266} height={280} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={second_photo} alt="Dish 2" width={266} height={280} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={scss.btn} onClick={handleNextSlide}>
        <Image src={arrow} alt="Next slide" width={23} height={40} />
      </div>
    </div>
  );
}

export default ImageSwiper;