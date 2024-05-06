import Image from 'next/image'
import React from 'react'
import './productsBanner.css'

const ProductBanner = () => {
    return (
        <div>
            <div className='position-relative'>
                <Image
                    src="/assets/images/products/Group 29177.png"
                    alt="Description of the image"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="contain"
                    priority={true}
                    loading="eager"
                    
                />

                <div className=' position-absolute spcBrotext'>
                    <p className='text-white fs-3 fw-semibold m-1'>Premium quality <strong className='fw-bold text-danger'>SPC</strong> flooring.</p>
                    <a href="/downloadCenter" className="button py-1 px-3 mb-4 respCption small">BROCHURE & DOWNLOAD CENTER</a>
                </div>

                <div className=' position-absolute lvtBrotext'>
                    <p className='text-white fs-3 fw-semibold m-1'>High-quality <strong className='fw-bold text-navy'>LVT</strong> flooring.</p>
                    <a href="/downloadCenter" className="button py-1 px-3 mb-4 respCption small">BROCHURE & DOWNLOAD CENTER</a>

                </div>


            </div>

            {/* <section>
                <div >
                    <div className="row align-items-center bannerbottom py-3 ">
                        <div className="col-md-4 text-center text-md-end mb-3 mb-md-0">
                            <p className='passiontext'>A passion for timeless</p>
                            <p className='passiontext'>beauty</p>
                        </div>
                        <div className="col-md-8 px-3 px-md-5">
                            <p className="mb-0 subcption">
                                Carefree living starts in a home with high-performance floors. That's Samaro's motivation since 1990. Today, you can choose between a wide range of long-lasting laminate, vinyl, and wood flooring, topped off with matching skirting boards and finishing profiles. Our trademarks: beautiful designs, waterproof floors, and easy installation - all thanks to a series of ground-breaking innovations.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default ProductBanner