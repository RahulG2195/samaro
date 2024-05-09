import React from 'react';
import "./Vision.css";

const Vision = () => {
    return (
        <>
            {/* <div className='vision-mission-cont'> */}
            <section className='vision mt-5 mx-5 position-relative '>
                <img src="/assets/images/why-samaro/Group 28873.svg" alt="" className='position-relative image1' />
                <img src="/assets/images/why-samaro/Path 98156.svg" alt="" className='d-none position-relative image2'/>
                <div className=' position-absolute vissionmissionCont'>
                    <div className="row g-2 align-items-center position-relative ps-5 ms-5  vissionsectionResp">
                        <div className="col-lg-12">
                            <div className="vision-text pt-3 position-relative row align-items-center justify-content-evenly">
                                <div className="col-lg-2 col-md-2 col-2">
                                    <div className="vision-image p-4">
                                        <img src="/assets/images/why-samaro/vision-mission/vision.png" alt="" />
                                    </div>
                                </div>
                                <div className='col-md-10 col-lg-9'>
                                    <h2 className='text-darkred visionH2'>Vision</h2>

                                    <p className='p-0 m-1 text-navy fw-normal'>- Revolutionizing the flooring industry with innovation and sustainability.</p>
                                    <p className='p-0 m-1 text-navy fw-normal'>-Offering high-quality SPC and LVT flooring solutions. (Luxurt Vinyl Tile) flooring sector.</p>
                                    <p className='p-0 m-1 text-navy fw-normal'>-Inspiring and enhancing living spaces globally. </p>
                                    <p className='p-0 m-1 text-navy fw-normal'>-Setting new standards in flooring excellence. </p>
                                    <p className='p-0 m-1 text-navy fw-normal'>-Making a positive impact on homes and environments worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </section> */}


                    {/* <section className='mission'> */}

                    <div className="row g-2 align-items-center mt-2 missionCont">
                        <div className="col-lg-12">
                            <div className="mission-text row align-items-center justify-content-end missionSectionResp  py-4 mt-2">
                                <div className='col-md-11 col-lg-9 col-12'>
                                    <h2 className='text-darkred missionH2'>Mission</h2>

                                    <p className='m-1 text-navy fw-normal'>-Leading the flooring industry with continuous innovation, quality standards, and sustainability at Samaro Global Industries. </p>
                                    <p className='m-1 text-navy fw-normal'>-Exceeding customer expectations through a diverse range of premium flooring products and unparalleled service and support.(Luxurt Vinyl Tile) flooring sector.</p>
                                    <p className='m-1 text-navy fw-normal'>-Utilizing expertise and state-of-the-art manufacturing to create beautiful, durable, and environmentally-friendly flooring solutions.</p>
                                    <p className='m-1 text-navy fw-normal'>-Transforming spaces and enriching lives with our commitment to excellence.</p>
                                </div>
                                <div className="col-lg-2 col-md-3 col-2">
                                    <div className="mission-image p-4 me-2">
                                        <img src="/assets/images/why-samaro/vision-mission/mission.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* </div> */}
        </>
    )
}

export default Vision