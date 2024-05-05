'use client'
import React, { useState } from 'react'
import './Newsletter.css'
import NewsCard from './NewsCard'
import '../Downloadcenter/dwnld.css'
import DownloadSwiper from '../Downloadcenter/DownloadSwiper'
import NewsletterSwiper from './NewsletterSwiper'

const Newsletter = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const NewlaunchData = [
        {
            imgurl: '/assets/images/Newletter/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (1)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (2)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture(3)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (1)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (2)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture(3)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
    ]
    const productKnowledgeData = [
        {
            imgurl: '/assets/images/Newletter/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (4)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (5)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (6)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (7)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (8)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (9)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (10)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (11)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
    ]
    const EventsData = [
        {
            imgurl: '/assets/images/Newletter/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (12)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (13)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (14)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (15)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (16)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (17)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (18)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
        {
            imgurl: '/assets/images/Newletter/picture (19)/picture.png',
            title: 'Seven tips to help you get better flooring design & Concept',
            date: 'November 11,2023',
            author: 'Anand Kashyap'
        },
    ]
    return (
        <>

            <div className='text-center dwnldcenterHeading'>
                <h2 className='fw-bold text-navy'>Newsletter</h2>
                <div className='dwnldcenterFilters my-4'>
                    <button onClick={() => setActiveCategory('All')}
                        className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'All' && 'bg-danger text-white'}`}>All</button>

                    <button onClick={() => setActiveCategory('New Launch')}
                        className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'New Launch' && 'bg-danger text-white'}`}>New Launch</button>

                    <button onClick={() => setActiveCategory('Product Knowledge')}
                        className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Product Knowledge' && 'bg-danger text-white'}`}>Product Knowledge</button>

                    <button onClick={() => setActiveCategory('Events')}
                        className={`btn text-danger border-danger rounded-pill py-0 px-4 me-2 fw-semibold ${activeCategory === 'Events' && 'bg-danger text-white'}`}>Events</button>

                </div>
            </div>
            <div className='container brochureCont position-relative mb-5'>
             
                <div className={`col-12 col-lg-12`}>
                <NewsletterSwiper  newlaunchCard='d-block' title="New Launch" cardData={NewlaunchData} active={activeCategory === 'All' || activeCategory === 'New Launch'} />

                </div>
            </div>
            <NewsletterSwiper Newsletter title="Product Knowledge" cardData={productKnowledgeData} active={activeCategory === 'All' || activeCategory === 'Product Knowledge'} />
            <NewsletterSwiper Newsletter title="Events" cardData={EventsData} active={activeCategory === 'All' || activeCategory === 'Events'} />


        </>
    )
}

export default Newsletter