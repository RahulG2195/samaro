import Image from 'next/image';
import './SubBanner.css';

import React from 'react'

const SubBanner = () => {
  return (
    <>
    <section className="career_banner">
        <Image 
            src="/assets/images/career/creer_banner.png"
            alt="career banner"
            width={100}
            height={100}
            layout="responsive"
            objectFit="contain"
            className="sub-banner"
            id="sub-banner"
        />
        <h1 className="sub-banner-heading">Let's make your flooring</h1>
        <div className="breadcrump">
            <a>Home</a> <span>-</span> <a>Contact</a>
        </div>
    </section>
    </>
  )
}

export default SubBanner


