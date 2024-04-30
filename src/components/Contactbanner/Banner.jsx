import Image from 'next/image';
import './SubBanner.css';

import React from 'react'

const SubBanner = () => {
  return (
    <>
      <section className="career_banner">
        <Image
          src="/assets/images/career/Mask Group 218.png"
          alt="career banner"
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          className="sub-banner"
        /> 
        <div className='contact-us-bannerTXT  col-lg-3'>
          <h1 className="sub-banner-heading">Let's make your flooring</h1>
          <div className="breadcrump">
            <a>Home</a> <span>-&gt;</span> <a>Contact</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default SubBanner


