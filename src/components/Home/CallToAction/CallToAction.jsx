import React from 'react'
import "./CallToAction.css"
const CallToAction = () => {
    return (
        <section className="property-inspection">
            <div className="image">
                <img src="/assets/images/home/property-inspection/3.png" className="mobile-image" alt="" />
                <img src="/assets/images/home/property-inspection/1.png" className="desktop-image" alt="" />
            </div>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-10 h-100">
                        <div className="row h-100">
                            <div className="row h-100 h-100">
                                <div className="col-lg-6">
                                    <div className="content h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                        <h2>Get your Property <br />Inspection</h2>
                                        <p>Ensuring Peace of Mind, One Inspection at a Time.</p>
                                        <a href="#" className="button mt-3">Get A Free Call</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="h-100 image-box">
                                        <img className="" src="/assets/images/home/property-inspection/2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction