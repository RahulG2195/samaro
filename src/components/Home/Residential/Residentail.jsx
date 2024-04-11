import React from 'react';
import "./Residential.css"

const Residentail = () => {
    return (
        <section className="commercial-2 mt-5">
            <div className="row justify-content-end">
                <div className="col-lg-10">
                    <div id="carouselExampleFade2" className="carousel slide carousel-fade h-100">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/assets/images/home/commercial/2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/images/home/commercial/1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/images/home/commercial/2.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2"
                            data-bs-slide="prev">
                            <i className="fa-solid fa-chevron-left carousel-control-prev-icon"></i>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2"
                            data-bs-slide="next">
                            <i className="fa-solid fa-chevron-left carousel-control-next-icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Residentail;