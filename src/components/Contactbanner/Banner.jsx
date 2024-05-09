import Image from 'next/image';
import './SubBanner.css';

import React from 'react'

const SubBanner = () => {
  return (
    <>
      <section className="career_banner poistion-relative">

        <Image
          src="/assets/images/career/Mask Group 218.png"
          alt="career banner"
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          className="sub-banner contact-deskresp"
        />
          <Image
            src="/assets/images/career/Group 28545.png"
            alt="Description of the image"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            priority={true}
            loading="eager"
            className='contact-mblresp'

          />
     
        <div className='contact-us-bannerTXT  col-lg-6 col-md-12 col-12'>
          <h1 className="sub-banner-heading"><u className='border-bottom border-white'>Let's make</u> your flooring</h1>
          <div className="breadcrump">
            <a>Home</a> <span>-&gt;</span> <a>Contact</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default SubBanner


