"use client"
import Link from 'next/link'
import React from 'react'
import './Design.css'

const Design = () => {
    return (
        <section className="design">
            <div className="container mb-4">
                <div className="row mx-auto">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <h2 className="sub-heading ">DESIGN RANGE IN <span>SPC & LVT</span></h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-lg-5">
                <div className="row g-lg-0 g-3">
                    <div className="col-lg-4">
                        <Link href='/product'>
                            <img className='design-img' src="/assets/images/home/design/1.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-4 position-relative">
                        <Link href='/product'>
                            <img className='design-img' src="/assets/images/home/design/2.png" alt="" />
                            {/* <span className='text-danger fw-semibold position-absolute ' style={{ left: '0' }}>COMING SOON*</span> */}
                        
                        </Link>
                    </div>
                    <div className="col-lg-4 position-relative">
                        <Link href='/product'>
                            <img className='design-img' src="/assets/images/home/design/Component 20 – 3.png" alt="" />
                            <span className='text-danger fw-semibold position-absolute py-2' style={{ left: '0' }}>COMING SOON*</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Design