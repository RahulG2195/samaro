import React from 'react'
import "./Dimensions.css";

const Dimensions = () => {
    return (
        <section className='dimensions'>
            <div className="row">
                <div className="col-lg-10 col-md-10 bg-navy text-white " >
                    <div className="row align-items-center inner-row-one">
                        <div className="col-lg-5  ">
                            <img src="/assets/images/why-samaro/dimensions/1.png" alt="" />
                        </div>
                        <div className="col-lg-7 p-5 respPlanktxt pplrplank text-navy">
                            <h3 className='fw-bold'>
                                Our Popular Plank Sizes
                            </h3>
                            <p className='text-navy'>
                                "Discover a world of possibilities with our popular plank sizes, carefully curated to cater to diverse tastes and design preferences. From versatile widths to exquisite lengths, our selection ensures the perfect fit for every space, creating a seamless blend of style and functionality. Choose excellence; choose from our range of sought-after plank sizes that redefine flooring standards."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-end mt-5">
                <div className="col-lg-10 col-md-8 bg-red text-white " >
                    <div className="row align-items-center inner-row-two">
                        <div className="col-lg-7 p-5 text-end odr1 respPlanktxt plnkThick">
                            <h3 className='fw-bold text-darkred'>
                                Plank Thickness & Wear Layer
                            </h3>
                            <p className='text-navy '>
                                Optimal strength, style blend: Plank Thickness, Wear Layer perfection awaits.
                            </p>
                            <div className='thickness text-navy'>
                                <img src="/assets/images/why-samaro/dimensions/Group 28285.svg" alt="err" style={{ width: '40%' }} />
                                <span className='small mx-3'>LVT: 1.5mm to 3mm</span>
                                <img src="/assets/images/why-samaro/dimensions/Group 28287.svg" alt="err" style={{ width: '50%' }} />
                                <span className='small mx-3'>SPC: 3.5mm to 8mm</span>
                                <img src="/assets/images/why-samaro/dimensions/Group 28289.svg" alt="err" style={{ width: '60%' }} />
                                <span className='small mx-3 wl'>WEAR LAYER: 0.1mm to 0.7mm</span>
                            </div>
                        </div>
                        <div className="col-lg-5 odr2">
                            <img src="/assets/images/why-samaro/dimensions/2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dimensions