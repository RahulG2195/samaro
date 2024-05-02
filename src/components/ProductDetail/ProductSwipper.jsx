import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './productSwipper.css'

const ProductSwipper = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [deviceWidth, setDeviceWidth] = useState(null);
  // alert(deviceWidth);
  useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className='row detailSwipper'>
        <div className={`col-sm-4 col-md-4 col-lg-4 ${(deviceWidth >= 600) ? '' : 'order-1'}`}>
          <Swiper
            loop={true}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={`mySwiper `}
          >
            {
              images.map(image => (
                <SwiperSlide className='sliderchild'>
                  <img src={image.url} alt={image.alt} />
                </SwiperSlide>
              ))
            }
          </Swiper>



          {/* <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={20}
          //   navigation= {{
          //     nextEl: '.swiper-button-next',
          //     prevEl: '.swiper-button-prev',
          //  }}
          // slidesPerView={1}
            freeMode={true}
            // navigation={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={`mySwiper swiper-nav-div ${(deviceWidth >= 600) ? 'swiper-vertica' : ''}`}
          >
            {
              images.map(image => (
                <SwiperSlide className='sliderchild'>
                  <img src={image.url} alt={image.alt} />
                </SwiperSlide>
              ))
            }
          </Swiper> */}
        </div>
        <div className='col-sm-8 col-md-8 col-lg-8 position-relative'>
          <div className="navigation-arrows d-flex flex-row">

            <div className="swiper-button-prev"></div>

            <div className="swiper-button-next"></div>
          </div>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
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