import React from 'react'
import "./Dimensions.css";

const Dimensions = () => {
    return (
        <section className='dimensions'>
            <div className="row">
                <div className="col-lg-10 bg-navy text-white " >
                    <div className="row align-items-center inner-row-one">
                        <div className="col-lg-5">
                            <img src="/assets/images/why-samaro/dimensions/1.png" alt="" />
                        </div>
                        <div className="col-lg-7 p-5">
                            <h3>
                                Our Popular Plank Sizes
                            </h3>
                            <p className='text-white'>
                                "Discover a world of possibilities with our popular plank sizes, carefully curated to cater to diverse tastes and design preferences. From versatile widths to exquisite lengths, our selection ensures the perfect fit for every space, creating a seamless blend of style and functionality. Choose excellence; choose from our range of sought-after plank sizes that redefine flooring standards."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-end mt-5">
                <div className="col-lg-10 bg-red text-white " >
                    <div className="row align-items-center inner-row-two">
                        <div className="col-lg-7 p-5">
                            <h3>
                                Plank Thickness and Wear Layer
                            </h3>
                            <p className='text-white'>
                                Optimal strength, style blend: Plank Thickness, Wear Layer perfection awaits.
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <img src="/assets/images/why-samaro/dimensions/2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dimensions