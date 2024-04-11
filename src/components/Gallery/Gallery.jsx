import React from 'react';
import "./Gallery.css";


const Gallery = () => {
    return (
        <section className='gallery'>
            <div className="container">
                <h2>Gallery</h2>
                <div className="line"></div>
                <div className="gallery-grid-even">
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                </div>
                <div className="gallery-grid-odd">
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                </div>
                <div className="gallery-grid-even">
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/assets/images/gallery/1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;