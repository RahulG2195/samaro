"use client"
import React, { useState } from 'react';
import '../../components/Downloadcenter/dwnld.css'
import DownloadCenterCard from '@/components/Downloadcenter/DownloadCenterCard'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
import DownloadSwiper from '@/components/Downloadcenter/DownloadSwiper';

const page = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const cardData = [
    {
      imgurl: '/assets/images/brochure/Brochure.png',
      title: 'Seven tips to help you get better flooring design & Concept',
      date: 'November 11,2023 |',
      author: 'By Anand Kashyap'
    },
    {
      imgurl: '/assets/images/brochure/Brochure.png',
      title: 'Seven tips to help you get better flooring design & Concept',
      date: 'November 11,2023 |',
      author: 'By Anand Kashyap'
    },
    {
      imgurl: '/assets/images/brochure/Brochure.png',
      title: 'Seven tips to help you get better flooring design & Concept',
      date: 'November 11,2023 |',
      author: 'By Anand Kashyap'
    },
    // {
    //   imgurl: '/assets/images/Newletter/samaro_spc_flooring_lookbook_front-1.png',
    //   title: 'Seven tips to help you get better flooring design & Concept',
    //   date: 'November 11,2023',
    //   author: 'Anand Kashyap'
    // },
    // {
    //   imgurl: '/assets/images/Newletter/samaro_spc_flooring_lookbook_front-1.png',
    //   title: 'Seven tips to help you get better flooring design & Concept',
    //   date: 'November 11,2023',
    //   author: 'Anand Kashyap'
    // },
    // {
    //   imgurl: '/assets/images/Newletter/samaro_spc_flooring_lookbook_front-1.png',
    //   title: 'Seven tips to help you get better flooring design & Concept',
    //   date: 'November 11,2023',
    //   author: 'Anand Kashyap'
    // },
    // {
    //   imgurl: '/assets/images/Newletter/samaro_spc_flooring_lookbook_front-1.png',
    //   title: 'Seven tips to help you get better flooring design & Concept',
    //   date: 'November 11,2023',
    //   author: 'Anand Kashyap'
    // },
    // {
    //   imgurl: '/assets/images/Newletter/samaro_spc_flooring_lookbook_front-1.png',
    //   title: 'Seven tips to help you get better flooring design & Concept',
    //   date: 'November 11,2023',
    //   author: 'Anand Kashyap'
    // },
    // {
    //   imgurl: '/assets/images/Newletter/samaro_spc_flooring_lookbook_front-1.png',
    //   title: 'Seven tips to help you get better flooring design & Concept',
    //   date: 'November 11,2023',
    //   author: 'Anand Kashyap'
    // },
  ]
  return (

    <section className='py-5'>
      <div className='text-center dwnldcenterHeading'>
        <h2 className='fw-bold text-navy'>Download center</h2>
        <div className='dwnldcenterFilters my-4 d-flex justify-content-center flex-wrap gap-2'>
          <button onClick={() => setActiveCategory('All')} 
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'All' && 'bg-danger text-white'}`}>All</button>

          <button onClick={() => setActiveCategory('Brochure')} 
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Brochure' && 'bg-danger text-white'}`}>Brochure</button>

          <button onClick={() => setActiveCategory('Installation Guide')} 
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Installation Guide' && 'bg-danger text-white'}`}>Installation Guide</button>

          <button onClick={() => setActiveCategory('Care Tips')}
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Care Tips' && 'bg-danger text-white'}`}>Care Tips</button>

          <button onClick={() => setActiveCategory('Warranty')} 
          className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Warranty' && 'bg-danger text-white'}`}>Warranty</button>
        </div>
      </div>

      <DownloadSwiper title="Brochure" cardData={cardData} active={activeCategory === 'All' || activeCategory === 'Brochure'} />
      <DownloadSwiper title="Installation Guide" cardData={cardData} active={activeCategory === 'All' || activeCategory === 'Installation Guide'} />
      <DownloadSwiper title="Care Tips" cardData={cardData} active={activeCategory === 'All' || activeCategory === 'Care Tips'} />
      <DownloadSwiper title="Warranty" cardData={cardData} active={activeCategory === 'All' || activeCategory === 'Warranty'} />



    </section>
  )
}

export default page