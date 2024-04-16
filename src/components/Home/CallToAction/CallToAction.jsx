import React from 'react'
import "./CallToAction.css"
import Form from '@/components/InquiryForm/Form'
const CallToAction = () => {
    return (
        <section className="property-inspection">
            <div className="image">
                <img src="/assets/images/home/property-inspection/3.png" className="mobile-image my-5" alt="" />
                <img src="/assets/images/home/property-inspection/1.png" className="desktop-image " alt="" />
            </div>
            <div className="container h-100 px-5 position-relative">
                <div className="row h-100">
                    <div className="col-lg-10 h-100">
                        <div className="row h-100">
                            <div className="row h-100">
                                <div className="col-lg-6">
                                    <div className="content h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                        <h2 className='mobiletext'>Get your Property <br />Inspection</h2>
                                        <p>Ensuring Peace of Mind, One Inspection at a Time.</p>
                                        <p  className="button mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Get A Free Call</p>
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