import React from 'react';
import "./Benefits.css";

const Benefits = () => {
    return (
        <section className='benefits samcontResp why-samaro position-relative my-5 pt-md-5'>
            <div className="container px-5">
                <h2 className='text-navy text-center mb-5'>Benefits</h2>
                <div className='position-relative col-12' >
                    <img src="/assets/images/why-samaro/Path 97423.svg" alt="" className='whysamBenifitsDeskbg' />
                    <img src="/assets/images/why-samaro/Path 98155.svg" alt="" className='whysamBenifitsMblbg position-relative' />

                    <div className="row px-0 whysam-benifits pt-5 w-100 position-absolute top-0">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-md-pt-1 pt-5">
                            <div className="benefits-boxes manfactResp">
                                <img src=" /assets/images/why-samaro/Group 28879.svg" alt="" className='mt-4' />
                                <div className='d-flex flex-column align-items-center text-darkred'>
                                    <h3 className='mb-4 text-center'>
                                        Manufacturing
                                    </h3>
                                    <ul className='fw-normal'>
                                        <li>Blend materials for durability</li>
                                        <li>Layer vinyl for stability.</li>
                                        <li>Add texture for realism.</li>
                                        <li>Cut for precise fit.</li>
                                        <li>Apply protective finish.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mt-5 performanceResp">
                            <div className="benefits-boxes h-100 text-navy ">
                                <img src=" /assets/images/why-samaro/Group 28880.svg" alt="" />
                                <div className='d-flex flex-column align-items-center'>
                                    <h3 className='my-4 px-4 text-center'>
                                        Product Performance
                                    </h3>
                                    <ul className='fw-normal mx-au' >
                                        <li>Resilience: Withstands scratches and impacts.</li>
                                        <li>Water Resistance: Ideal for moisture-prone areas.</li>
                                        <li>Stability: Maintains shape in different temperatures. </li>
                                        <li>Easy Care: Requires minimal cleaning effort.</li>
                                        <li>Longevity: Designed for lasting performance.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 ">
                            <div className="benefits-boxes h-100 text-darkred ">
                                <img src=" /assets/images/why-samaro/Group 28877.svg" alt="" />
                                <h3 className='my-4  px-4 text-center'>
                                    Quality Assurance
                                </h3>
                                <ul className='fw-normal '>
                                    <li>Standards Compliance: Meets quality benchmarks.</li>
                                    <li>Material Inspection: Rigorously checks raw materials.</li>
                                    <li>Production Oversight: Constant monitoring during manufacturing.</li>
                                    <li>Quality Testing: Thorough assessment of finished products.</li>
                                    <li>Feedback Integration: Incorporates customer input for improvement.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 pt-5 mt-3 inovativeREsp">
                            <div className="benefits-boxes h-100 text-navy">
                                <img src=" /assets/images/why-samaro/Group 28883.svg" alt="" />
                                <h3 className='my-4  px-4 text-center'>
                                    lnnovating
                                </h3>
                                <ul className='fw-normal'>
                                    <li>Sustainable Materials: Eco-friendly exploration.</li>
                                    <li>Innovative Designs: Creative patterns.</li>
                                    <li> Smart Integration: Technological functionality.</li>
                                    <li>Custom Solutions: Tailored options.</li>
                                    <li> Enhanced Performance: Focus on durability.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits