import React from 'react'
import "./SPCLVT.css"
import Link from 'next/link'
const Spclvt = () => {
    return (
        <section className="section spc-lvt pb-5">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 ">
                        <div className="content px-lg-5 w-75">
                            <h2 className="sub-heading fw-bold navyBlue ">
                                Build a happy home with a Samaro floor
                            </h2>
                            <p className="mt-4 text-navy small">
                                Be inspired by our floors and create a home filled with
                                happiness. We are certain that together, we will be able to
                                bring your unique vision to life, one plank at a time, for a
                                lifetime. Whether you love vinyl tiles & planks,
                                <span className="text-primary">SPC</span> or
                                <span className="text-primary">LVT</span>
                                flooring, we would love to help you with your renovation
                                project.
                            </p>
                        </div>
                        <div className="qualities px-4 mt-4 ">
                            <div className="d-flex flex-wrap justify-content-evenly  " >
                                <div className="d-flex align-items-center gap-2 text-white">
                                    <img src="/assets/images/home/spc-lvt/icons/1.png" alt="" />
                                    <span>Easy to install</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 text-white">
                                    <img src="/assets/images/home/spc-lvt/icons/2.png" alt="" />
                                    <span>Natural look & feel</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 text-white">
                                    <img src="/assets/images/home/spc-lvt/icons/3.png" alt="" />
                                    <span>100% Water-Resistant</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 ps-2">
                        <div className="images-wrapper">
                            <div className="img position-">
                                <img src="/assets/images/home/spc-lvt/1.png" alt="" />
                                <div className='text-center position-absolute onImgtext text-white'>
                                    <span className=' border-3 border-bottom px-2 fs-2 px-4 fw-semibold'>SPC</span>
                                    <p className='m-0 text-white small'>Click & Lock</p>
                                    <Link href="/spcProducts" className='rounded-pill border border-2 fw-semibold small px-5 text-white '>Know more </Link>
                                </div>
                            </div>
                            <div className="img-2">
                                <img src="/assets/images/home/spc-lvt/2.png" alt="" />
                                <div className='text-center position-absolute onImgtext2 text-white'>
                                    <span className=' border-3 border-bottom px-2 fs-2 px-4 fw-semibold'>LVT</span>
                                    <p className='m-0 text-white small'>Glue down</p>
                                    <Link href='/lvtProducts' className='rounded-pill border border-2 fw-semibold small px-5 text-white'>Know more </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spclvt