import React from 'react';
import "./Benefits.css";

const Benefits = () => {
    return (
        <section className='benefits why-samaro'>
            <div className="container">
                <h2 className='text-navy text-center '>Benefits</h2>
                <div className="row g-5 ">
                    <div className="col-lg-3">
                        <div className="benefits-boxes h-100 primary-bg">
                            <img src="/assets/images/why-samaro/benefits/manufacturing.png" alt="" />
                            <h3 className='mt-2'>
                                Manufacturing
                            </h3>
                            <ol>
                                <li>1. Blend materials for durability</li>
                                <li>2. Layer vinyl for stability.</li>
                                <li>3. Add texture for realism.</li>
                                <li>4. Cut for precise fit.</li>
                                <li>5. Apply protective finish.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="benefits-boxes h-100 navy-bg">
                            <img src="/assets/images/why-samaro/benefits/product-performance.png" alt="" />
                            <h3 className='mt-2'>
                                Product Performance
                            </h3>
                            <ol>
                                <li>1. Resilience: Withstands scratches and impacts.</li>
                                <li>2. Water Resistance: Ideal for moisture-prone areas.</li>
                                <li>3. Stability: Maintains shape in different temperatures. </li>
                                <li>4. Easy Care: Requires minimal cleaning effort.</li>
                                <li>5. Longevity: Designed for lasting performance.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="benefits-boxes h-100 primary-bg">
                            <img src="/assets/images/why-samaro/benefits/quality-assurance.png" alt="" />
                            <h3 className='mt-2'>
                                Quality Assurance
                            </h3>
                            <ol>
                                <li>1. Standards Compliance: Meets quality benchmarks.</li>
                                <li>2. Material Inspection: Rigorously checks raw materials.</li>
                                <li>3. Production Oversight: Constant monitoring during manufacturing.</li>
                                <li>4. Quality Testing: Thorough assessment of finished products.</li>
                                <li>5. Feedback Integration: Incorporates customer input for improvement.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="benefits-boxes h-100 navy-bg">
                            <img src="/assets/images/why-samaro/benefits/innovating.png" alt="" />
                            <h3 className='mt-2'>
                                Quality Assurance
                            </h3>
                            <ol>
                                <li>1. Standards Compliance: Meets quality benchmarks.</li>
                                <li>2. Material Inspection: Rigorously checks raw materials.</li>
                                <li>3. Production Oversight: Constant monitoring during manufacturing.</li>
                                <li>4. Quality Testing: Thorough assessment of finished products.</li>
                                <li>5. Feedback Integration: Incorporates customer input for improvement.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits