import React from 'react';
import "./Download.css";
import Link from 'next/link';
const Download = ({ useRed }) => {
    return (
        <>
            <div className='mb-5 row downlodbackground '>
                <div className=' col-lg-10 col-md-12 position-relative'>
                    {useRed && (
                        <div className='redAndBlueBg'>
                            <img
                                src="/assets/images/why-samaro/downloads/Group 29181.svg"
                                alt="" className='deskDwnldimg'
                            />
                            <img
                                src="/assets/images/why-samaro/downloads/Group 29191.svg"
                                alt="" className='mobileDwnldimg '
                            />
                        </div>
                    )}
                    {!useRed && (
                        <div className='redAndBlueBg'>
                        <img
                            src="/assets/images/why-samaro/downloads/Group 29183.svg"
                            alt="" className='deskDwnldimg'
                        />
                         <img
                                src="/assets/images/why-samaro/downloads/Group 29192.svg"
                                alt="" className='mobileDwnldimg '
                            />
                        </div>
                    )}
                    <div className="col-lg-4 col-md-4 col-sm-2 col-8 samply position-absolute">
                        <img className="" src="/assets/images/home/floor-explorer/2.png" alt="" />
                    </div>
                    <div className="dwnldTXTAbout col-lg-4 col-md-4 col-8 position-absolute pt-4">
                        <h3 className="respHeading2">Download Center</h3>
                        <p className=" respCption pe-3 my-4">
                            Check out our Download Center to easily find all our PDFs and resources about our flooring products.
                        </p>
                        <a href="/downloadCenter" className={`${useRed} ? 'redimg' : button py-1 px-3 mb-4 respCption small`}>BROCHURE & DOWNLOAD CENTER</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download