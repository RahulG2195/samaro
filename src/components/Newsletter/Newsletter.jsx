import React from 'react'
import './Newsletter.css'
import NewsCard from './NewsCard'

const Newsletter = () => {
    const imageArr = [
        { image: '/assets/images/Newletter/Mask Group 219.png' },
        { image: '/assets/images/Newletter/Mask Group 219.png' },
        { image: '/assets/images/Newletter/Mask Group 219.png' },
        { image: '/assets/images/Newletter/Mask Group 219.png' },
        { image: '/assets/images/Newletter/Mask Group 219.png' },
        { image: '/assets/images/Newletter/Mask Group 219.png' },
        { image: '/assets/images/Newletter/Mask Group 219.png' },
        { image: '/assets/images/Newletter/Mask Group 219.png' },
        { image: '/assets/images/Newletter/Mask Group 219.png' },
    ]
    return (
        <>
            <div className='px-5 mx-4 my-5 respNews'>
                <h1 className='px-4 fw-semibold newsletterTxt border-5 border-bottom border-danger w-75'>Newsletter</h1>
                <div className='my-5 px-4 Newsfilters'>
                    <button className='productKBtn rounded-pill py-0 px-4 me-2 fw-semibold'>Product Knowledge</button>
                    <button className='productKBtn rounded-pill py-0 px-4 mx-2 fw-semibold'>Events</button>
                    <button className='productKBtn rounded-pill py-0 px-4 mx-2 fw-semibold'>Resources</button>
                </div>
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-3 g-5 newsCardGrid">
                    {imageArr.map((image, index) => (
                        <div key={index} className='col'>
                            <NewsCard image={image.image} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Newsletter