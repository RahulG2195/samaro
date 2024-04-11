import React from 'react'
import "./Mission.css"
const Mission = () => {
    return (
        <section className='mission mt-5'>
            <div className="row ">
                <div className="col-lg-10">
                    <div className="row g-5 align-items-center ">
                        <div className="col-lg-10">
                            <div className="mission-text">
                                <h2 className='text-navy'>Mission</h2>
                                <p className='mt-4 text-navy'>
                                    With over 50 years of manufacturing expertise in the plastic processing industry, Samaro Global Industries has emerged as a develop in the SPC and LVT flooring sector since our inception in 2019. Our unwavering commitment to innovation, quality, and sustainability has propelled us to become India's largest SPC and LVT manufacturer within just three years, a remarkable feat underscored by our state-of-the-art manufacturing facility in Gujarat boasting an annual installed capacity of over 15 million square meters.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="mission-image">
                                <img src="/assets/images/why-samaro/vision-mission/mission.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission