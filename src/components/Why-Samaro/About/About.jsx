import React from 'react'
import "./About.css"
const About = () => {
    return (
        <section className='about bg-navy '>
            <div className="">
                <div className="">
                    <div className="row gap-5 align-items-center py-5 justify-content-center">
                        <div className="col-lg-4 headline text-end">
                            <p className='text-white tagline '>
                                The beautiful <span className='fw-bold'>
                                    JOURNEY
                                </span> of
                            </p>
                            <img className='logo' src="/assets/images/logo/logo.png" alt="" />
                        </div>
                        <div className="col-lg-7">
                            <p className='text-white company-history text-start'>
                                With over 50 years of manufacturing expertise in the plastic processing industry, Samaro Global Industries has emerged as a develop in the SPC and LVT flooring sector since our inception in 2019. Our unwavering commitment to innovation, quality, and sustainability has propelled us to become India's largest SPC and LVT manufacturer within just three years, a remarkable feat underscored by our state-of-the-art manufacturing facility in Gujarat boasting an annual installed capacity of over 15 million square meters.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About