import React from 'react';
import "./Benefits.css";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const Benefits = () => {
    const benifitsIcon = [
        { imageSrc: "/assets/images/home/benefits/benefits/weather.png", text: "Weather Proof" },
        { imageSrc: "/assets/images/home/benefits/benefits/waterproof.png", text: "100% waterproof" },
        { imageSrc: "/assets/images/home/benefits/benefits/lock.png", text: "CLICK N LOCK INSTALLATION" },
        { imageSrc: "/assets/images/home/benefits/benefits/scratch.png", text: "SCRATCH RESISTANT" },
        { imageSrc: "/assets/images/home/benefits/benefits/termite.png", text: "TERMITE PROOF" },
        { imageSrc: "/assets/images/home/benefits/benefits/glue-free.png", text: "GLUE FREE APPLICATION" },
        { imageSrc: "/assets/images/home/benefits/benefits/fire-resistant.png", text: "FIRE RESISTANT" },
        { imageSrc: "/assets/images/home/benefits/benefits/stain-protection.png", text: "STAIN PROTECTION" },
        { imageSrc: "/assets/images/home/benefits/benefits/dust-free.png", text: "DUST FREE INSTALLATION" },
        { imageSrc: "/assets/images/home/benefits/benefits/recyclable.png", text: "100% RECYCLABLE" },
        { imageSrc: "/assets/images/home/benefits/benefits/durability.png", text: "DURABILITY" },
        { imageSrc: "/assets/images/home/benefits/benefits/Group 28770.svg", text: "Know Now" },
      ];
    const benifitsARR = [
        {
            url: "/assets/images/home/benefits/Mask Group 323.png",
            alt: 'err'
        },
        {
            url: "/assets/images/home/benefits/Mask Group 322.png",
            alt: 'err'
        },
        {
            url: "/assets/images/home/benefits/Mask Group 324.png",
            alt: 'err'
        },
        {
            url: "/assets/images/home/benefits/Mask Group 325.png",
            alt: 'err'
        },
    ]
    return (
        <section className="benefits position-relative">

            <div className="mt-3">

                <h2 className="text-navy benifitsHeading px-5 UpperBenifitsText pt-5">
                    Unlock Many Benefits <br />
                    with Click-N-Lock® Tiles
                </h2>
                <div className="row align-items-center justify-content-between ms-5 benifitscont">
                    <div className="col-lg-6 col-md-12 position-relative px-5  beniInnerCont">
                        <h2 className="text-navy benifitsHeading px-5 lowerBenifitsText">
                            Unlock Many Benefits <br />
                            with Click-N-Lock® Tiles
                        </h2>
                        <img src="/assets/images/home/benefits/Mask Group 325.png" alt="" className='upperimage' />
                        <div className="topcorner">
                            <img src="/assets/images/home/benefits/Group 27837.svg" alt="err" />
                        </div>
                        <div className="bottomcorner">
                            <img src="/assets/images/home/benefits/Group 27834.svg" alt="err" />
                        </div>

                        <div className="column-wrapper px-5 benifitsinDesktop">
                            <div className="row g-5 mt-1 respBenifitrow ">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/weather.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">Weather Proof</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/waterproof.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">100% waterproof</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/lock.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">CLICK N LOCK INSTALLATION</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/scratch.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">SCRATCH RESISTANT</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/termite.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">TERMITE PROOF</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/glue-free.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">GLUE FREE APPLICATION</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/fire-resistant.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">FIRE RESISTANT</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/stain-protection.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">STAIN PROTECTION</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/dust-free.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">DUST FREE INSTALLATION</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/recyclable.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">100% RECYCLABLE</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <div className="image">
                                        <img src="/assets/images/home/benefits/benefits/durability.png" alt="" />
                                    </div>
                                    <span className="text-navy text small fw-semibold">DURABILITY</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                    <Link href={'/why-samaro'}>
                                        <div className="image">
                                            <img src="/assets/images/home/benefits/benefits/Group 28770.svg" alt="" />
                                        </div>
                                        <span className="text-navy text small fw-semibold">Know Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*  Swipper of benifits icons in mobile view */}


                        <div className='benifitsSwipper'>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                modules={[EffectFade, Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {benifitsIcon.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="column-wrapper my-3">
                                            <div className="row g-5 respBenifitrow px-0">
                                                <div className=" text-center">
                                                    <div className="image">
                                                        <img src={item.imageSrc} alt="" />
                                                    </div>
                                                    <span className="text-navy text small fw-semibold">{item.text}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                    </div>
                    <div className="col-lg-6 col-md-6 col-12 ps- benifitsRightSide">

                        <Swiper
                            effect={'fade'}
                            modules={[EffectFade, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            className="mySwiper"
                        >
                            {benifitsARR.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='benifitsSliderImage'>
                                        <img src={item.url} className="rightside-image" alt={item.alt} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits