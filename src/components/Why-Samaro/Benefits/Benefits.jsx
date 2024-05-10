import React from 'react';
import "./Benefits.css";

const Benefits = () => {
    return (
        <section className='benefits samcontResp why-samaro position-relative mt-5 pt-5'>
            <div className="container px-5">
                <h2 className='text-navy text-center mb-5'>Benefits</h2>
                <div className='position-relative col-12' >
                    <img src="/assets/images/why-samaro/Path 97423.svg" alt="" className='whysamBenifitsDeskbg' />
                    <img src="/assets/images/why-samaro/Path 98155.svg" alt="" className='whysamBenifitsMblbg position-relative' />

                    <div className="row px-0 whysam-benifits pt-5 w-100 position-absolute top-0">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-md-pt-1 pt-5">
                            <div className="benefits-boxes manfactResp">
                                <img src=" /assets/images/why-samaro/Group 28879.svg" alt="" className='mt-4' />
                                <div className='d-flex flex-column align-items-center text-darkred'>
                                    <h3 className='mb-4 text-center'>
                                        Manufacturing
                                    </h3>
                                    <ol className='fw-normal '>
                                        <li>1. Blend materials for durability</li>
                                        <li>2. Layer vinyl for stability.</li>
                                        <li>3. Add texture for realism.</li>
                                        <li>4. Cut for precise fit.</li>
                                        <li>5. Apply protective finish.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3  pt-5 mt-5 performanceResp">
                            <div className="benefits-boxes h-100 text-navy ">
                                <img src=" /assets/images/why-samaro/Group 28880.svg" alt="" />
                                <h3 className='my-4 text-center'>
                                    Product Performance
                                </h3>
                                <ol className='fw-normal mx-au' >
                                    <li>1. Resilience: Withstands scratches and impacts.</li>
                                    <li>2. Water Resistance: Ideal for moisture-prone areas.</li>
                                    <li>3. Stability: Maintains shape in different temperatures. </li>
                                    <li>4. Easy Care: Requires minimal cleaning effort.</li>
                                    <li>5. Longevity: Designed for lasting performance.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 ">
                            <div className="benefits-boxes h-100 text-darkred ">
                                <img src=" /assets/images/why-samaro/Group 28877.svg" alt="" />
                                <h3 className='my-4  text-center'>
                                    Quality Assurance
                                </h3>
                                <ol className='fw-normal '>
                                    <li>1. Standards Compliance: Meets quality benchmarks.</li>
                                    <li>2. Material Inspection: Rigorously checks raw materials.</li>
                                    <li>3. Production Oversight: Constant monitoring during manufacturing.</li>
                                    <li>4. Quality Testing: Thorough assessment of finished products.</li>
                                    <li>5. Feedback Integration: Incorporates customer input for improvement.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 pt-5 mt-3 inovativeREsp">
                            <div className="benefits-boxes h-100 text-navy">
                                <img src=" /assets/images/why-samaro/Group 28883.svg" alt="" />
                                <h3 className='my-4 text-center'>
                                    lnnovating
                                </h3>
                                <ol className='fw-normal'>
                                    <li>1.Sustainable Materials: Eco-friendly exploration.</li>
                                    <li>2.Innovative Designs: Creative patterns.</li>
                                    <li>3. Smart Integration: Technological functionality.</li>
                                    <li>4.Custom Solutions: Tailored options.</li>
                                    <li>5. Enhanced Performance: Focus on durability.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits