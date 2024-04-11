import React from 'react'
import "./SPCLVT.css"
const Spclvt = () => {
    return (
        <section className="section spc-lvt pb-5">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                        <div className="content px-lg-5">
                            <h2 className="sub-heading text-secondary">
                                Build a happy home with a Samaro floor
                            </h2>
                            <p className="mt-4 text-navy">
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
                        <div className="qualities p-2 px-4 mt-4">
                            <div className="row">
                                <div className="col-4 d-flex align-items-center gap-3 text-white">
                                    <img src="/assets/images/home/spc-lvt/icons/1.png" alt="" />
                                    <span>Easy to install</span>
                                </div>
                                <div className="col-4 d-flex align-items-center gap-3 text-white">
                                    <img src="/assets/images/home/spc-lvt/icons/2.png" alt="" />
                                    <span>Natural look & feel</span>
                                </div>
                                <div className="col-4 d-flex align-items-center gap-3 text-white">
                                    <img src="/assets/images/home/spc-lvt/icons/3.png" alt="" />
                                    <span>100% Water-Resistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ps-2">
                        <div className="images-wrapper">
                            <div className="img">
                                <img src="/assets/images/home/spc-lvt/1.png" alt="" />
                            </div>
                            <div className="img-2">
                                <img src="/assets/images/home/spc-lvt/2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spclvt