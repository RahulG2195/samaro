import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductSwipper = ({images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [deviceWidth, setDeviceWidth] = useState(null);
// alert(deviceWidth);
useEffect(() => {
  setDeviceWidth(window.innerWidth);
}, []);

  return (
    <>
      <div className='row'>
        <div className={`col-sm-3 ${(deviceWidth >= 600) ? '' : 'order-1'}`}>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            navigation= {{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
           }}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={`mySwiper swiper-nav-div ${(deviceWidth >= 600) ? 'swiper-vertical' : ''}`}
          >
            {
              images.map(image => (
                <SwiperSlide className='sliderchild'>
                  <img src={image.url} alt={image.alt} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='col-sm-9'>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 topSliderRes"
          >
            {
              images.map(image => (
                <SwiperSlide className='sliderMain'>
                  <img src={image.url} alt={image.alt} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductSwipper