import React, { useState } from 'react';
import '../../components/Downloadcenter/dwnld.css';
import DownloadCenterCard from '@/components/Downloadcenter/DownloadCenterCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import NewLaunchCard from '../Newsletter/NewLaunchCard';
import Newsletter from '../Newsletter/Newsletter';
import'./Newsletter.css'

const NewsletterSwiper = ({ title, cardData, active, newlaunchCard, Newsletter }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    if (!active) return null;


    return (
        <div className='container brochureCont position-relative mb-5 NewsletterSwiper'>
            <h1 className='fw-bold text-navy border-bottom border-danger border-4 mb-4'>{title}</h1>
            <div className={`col-12 col-lg-12`}>
                {newlaunchCard ? (
                    <div>
                        <NewLaunchCard />
                    </div>
                ) : ''}

                {Newsletter ? (
                    <div>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={0}
                            slidesPerView={1}
                            freeMode={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            navigation={true}
                            className={`mySwiper`}
                            breakpoints={{
                                300: { slidesPerView: 2, spaceBetween: 10 },
                                576: { slidesPerView: 2, spaceBetween: 10 },
                                768: { slidesPerView: 3, spaceBetween: 10 },
                                992: { slidesPerView: 5, spaceBetween: 10 },
                            }}
                            
                        >
                            {cardData.map((card, index) => (
                                <SwiperSlide key={index} className='sliderchild'>
                                    <div className='mb-5'>
                                        <DownloadCenterCard
                                            imgurl={card.imgurl}
                                            title={card.title}
                                            date={card.date}
                                            author={card.author}
                                            WatchNowButton={'watch Now'}
                                        />
                                    </div>
                                    <div>
                                        <DownloadCenterCard
                                            imgurl={card.imgurl}
                                            title={card.title}
                                            date={card.date}
                                            author={card.author}
                                            WatchNowButton={'watch Now'}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                            
                        </Swiper>
                    </div>
                ) :
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={40}
                        slidesPerView={1}
                        freeMode={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        navigation={true}
                        className={`mySwiper`}
                        breakpoints={{
                            300: { slidesPerView: 2, spaceBetween: 10 },
                            576: { slidesPerView: 2, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 10 },
                            992: { slidesPerView: 5, spaceBetween: 10 },
                        }}
                    >
                        {cardData.map((card, index) => (
                            <SwiperSlide key={index} className='sliderchild'>
                                <DownloadCenterCard
                                    imgurl={card.imgurl}
                                    title={card.title}
                                    date={card.date}
                                    author={card.author}
                                    WatchNowButton={'watch Now'}

                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }

            </div>
        </div>
    );
};

export default NewsletterSwiper;