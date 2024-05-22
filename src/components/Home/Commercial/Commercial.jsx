import React from 'react'
import "./Commercial.css"

const Commercial = () => {
    const images = [
        "/assets/images/home/commercial/1.jpg",
        "/assets/images/home/commercial/Mask Group 127.png",
        "/assets/images/gallery/px-conversions/1 (1).webp",
        "/assets/images/gallery/px-conversions/2 (20).webp",
        "/assets/images/gallery/px-conversions/1 (2).webp"
    ];
    return (
        <>
            <section className="commericial-heading">
                <div className="container">
                    <h2 className="heading fw-bold">Spaces</h2>
                </div>
            </section>

            <section className="commercial mt-5">
                <div className="container"></div>
                <div className="row">
                    <div className="col-lg-11">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                {images.map((image, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <img src="/assets/images/home/commercial/Group 29040.svg" alt="Previous" className='w-25' />
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <img src="/assets/images/home/commercial/Group 29039.svg" alt="Next" className='w-25' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Commercial