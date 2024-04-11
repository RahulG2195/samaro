"use client"
import Link from 'next/link'
import React from 'react'

const Design = () => {
    return (
        <section className="design">
            <div className="container mb-4">
                <div className="row mx-auto">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <h2 className="sub-heading">Design Range in <span>SPC & LVT</span></h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-lg-5">
                <div className="row g-lg-0 g-3">
                    <div className="col-lg-4">
                        <Link href='/'>
                            <img className='design-img' src="/assets/images/home/design/1.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link href='/'>
                            <img className='design-img' src="/assets/images/home/design/2.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link href='/'>
                            <img className='design-img' src="/assets/images/home/design/1.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Design