import React from 'react'
import "./Commercial.css"

const Commercial = () => {
    return (
        <>
            <section className="commericial-heading">
                <div className="container">
                    <h2 className="heading">Spaces</h2>
                </div>
            </section>

            <section className="commercial mt-5">
                <div className="container"></div>
                <div className="row">
                    <div className="col-lg-10">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/assets/images/home/commercial/1.jpg" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/assets/images/home/commercial/2.jpg" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/assets/images/home/commercial/1.jpg" className="d-block w-100" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                                <i className="fa-solid fa-chevron-left carousel-control-prev-icon"></i>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                                <i className="fa-solid fa-chevron-left carousel-control-next-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Commercial