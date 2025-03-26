'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const HeaderSlider: React.FC<Props> = ({ className }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className={cn('', className)}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper w-full aspect-[3/1] ">
        {[
          {
            desc: '/assets/images/1.jpg',
            mobile: '/assets/images/banner-parfume-mobile-2.jpg',
          },
          {
            desc: '/assets/images/header-slider.jpg',
            mobile: '/assets/images/banner-parfume-mobile.jpg',
          },
        ].map((image, index) => (
          <SwiperSlide key={index} className="relative w-full ">
            {/* Mobile Responsive */}

            <div className="">
              <Image
                className={`object-cover transition-transform duration-1200 ease-in-out  ${
                  activeIndex == index ? 'scale-110' : 'scale-100'
                }`}
                src={image.desc}
                alt="Header Slider"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
