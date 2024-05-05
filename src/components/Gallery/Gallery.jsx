import React from 'react';
import "./Gallery.css";
import Image from 'next/image';


const Gallery = () => {
    const Images = [
        // { imgUrl: "/assets/images/gallery/1.jpg" },
        { imgUrl: "https://images.pexels.com/photos/14082105/pexels-photo-14082105.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { imgUrl: "https://images.pexels.com/photos/17960586/pexels-photo-17960586/free-photo-of-sandy-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { imgUrl: "https://via.placeholder.com/450x300" },
        { imgUrl: "https://via.placeholder.com/500x750" },
        { imgUrl: "https://via.placeholder.com/750x500" },
        { imgUrl: "https://via.placeholder.com/350x250" },
        { imgUrl: "https://via.placeholder.com/250x350" },
        { imgUrl: "https://via.placeholder.com/200x200" },
        { imgUrl: "https://via.placeholder.com/600x600" },
        { imgUrl: "https://via.placeholder.com/800x400" },
        { imgUrl: "https://via.placeholder.com/400x800" },
        { imgUrl: "https://via.placeholder.com/300x300" },
        { imgUrl: "https://via.placeholder.com/500x500" },
        { imgUrl: "https://via.placeholder.com/700x500" },
        { imgUrl: "https://via.placeholder.com/500x700" },
        { imgUrl: "https://via.placeholder.com/400x400" },
        { imgUrl: "https://via.placeholder.com/600x700" },
        { imgUrl: "https://via.placeholder.com/400x800" },
        { imgUrl: "https://via.placeholder.com/300x300" },
        { imgUrl: "https://via.placeholder.com/500x500" },
        { imgUrl: "https://via.placeholder.com/700x500" },
        { imgUrl: "https://via.placeholder.com/500x700" },
        { imgUrl: "https://via.placeholder.com/400x400" },
        { imgUrl: "https://via.placeholder.com/600x700" },
    ];

    return (
        <section className='gallery'>
            <div className="container">
                <h2>Gallery</h2>
                <div className="line"></div>

                <div className="grid">
                    {Images.map((img, index) => (
                        <div key={index} className="grid-item">
                            <div className="card new_div">
                                <img src={img.imgUrl} alt="" />
                                {/* <Image
                                id="myImg"
                                className="news_img"
                                src={img.imgUrl}
                                alt={`Image ${index + 1}`}
                                width={500}
                                height={500}
                                loading="lazy"
                            /> */}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Gallery;