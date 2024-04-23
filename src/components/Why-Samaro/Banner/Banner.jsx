import Image from 'next/image'
import React from 'react'
import './whySmbanner.css'

const Banner = () => {
    return (
        <section className='banner bg-black why-samaro position-relative'>
            
            <Image
                src="/assets/images/why-samaro/dimensions/Mask Group 109.png"
                alt="Description of the image"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                priority={true}
                loading="eager"
            />
            <div className=' whyBannerTxt w-50'>
                <p className=' m-0 text-center fw-semibold'>ABOUT SAMARO</p>
                <p className=' m-0 text-end fw-semibold'>STEP INTO NEW DESIGN</p>
                </div>
        </section>
    )
}

export default Banner