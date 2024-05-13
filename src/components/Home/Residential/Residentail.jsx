import React from 'react';
import "./Residential.css";

const Residential = () => {
    return (
        <section className="commercial-2 my-5">
            <div className="row justify-content-end">
                <div className="col-lg-11">
                    <div id="carouselExampleFade2" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/assets/images/home/commercial/Mask Group 12.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/images/home/commercial/Mask Group 128.png" className="d-block w-100" alt="..." />
                            </div>
                           
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
                        <img src="/assets/images/home/commercial/Group 29040.svg" alt="" className='w-25'/>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
                        <img src="/assets/images/home/commercial/Group 29039.svg" alt="" className='w-25'/>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Residential;
