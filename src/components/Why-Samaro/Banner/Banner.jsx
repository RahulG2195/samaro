import Image from 'next/image'
import React from 'react'
import './whySmbanner.css'

const Banner = () => {
    return (
        <section className='banner why-samaro whysamaro_sec position-relative'>

            {/* <Image
                src="/assets/images/why-samaro/dimensions/Mask Group 109.png"
                alt="Description of the image"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                priority={true}
                loading="eager"
            /> */}
            <video autoPlay muted loop className='w-100 '>
                <source src="assets/images/why-samaro/Samaro- Building Lifestyle_Why samaro Banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className=' whyBannerTxt w-50'>
                <p className=' m-0 text-center fw-semibold'>ABOUT SAMARO</p>
                <p className=' m-0 text-end fw-semibold'>STEP INTO NEW DESIGN</p>
            </div>
        </section>
    )
}

export default Banner