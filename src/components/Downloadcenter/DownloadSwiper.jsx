import React, { useState } from 'react';
import '../../components/Downloadcenter/dwnld.css';
import DownloadCenterCard from '@/components/Downloadcenter/DownloadCenterCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const DownloadSwiper = ({ title, cardData,active }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (!active) return null;
  

  return (
    <div className='container brochureCont position-relative mb-5'>
      <h1 className='fw-bold text-navy border-bottom border-danger border-4 mb-4'>{title}</h1>
      <div className={`col-12 col-lg-12`}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={40}
          slidesPerView={1}
          freeMode={true}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={true}
          className={`mySwiper`}
          breakpoints={{ // Adjust slidesPerView based on screen size range
            300: { slidesPerView: 2 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 6 },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className='sliderchild'>
              <DownloadCenterCard
                imgurl={card.imgurl}
                title={card.title}
                date={card.date}
                author={card.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DownloadSwiper;