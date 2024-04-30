import React from 'react';
import "./Download.css";
import Link from 'next/link';
const Download = ({useRed}) => {
    return (
    
        <>

            <div className='my-5 row downlodbackground'>
                <div className=' col-lg-10 col-md-12 position-relative'>
                {useRed && (
            <img
              src="/assets/images/why-samaro/downloads/Rectangle 375.svg"
              alt=""
            />
          )}
          {!useRed && (
            <img
              src="/assets/images/why-samaro/downloads/Rectangle 37.svg"
              alt=""
            />
          )}
                    <div className="col-lg-4 col-md-4 col-sm-4 samply position-absolute">
                        <img className="" src="/assets/images/home/floor-explorer/2.png" alt="" />
                    </div>
                    <div className="dwnldTXTAbout  col-lg-4 position-absolute">
                        <h3 className="respHeading2">Download Center</h3>
                        <p className=" respCption pe-3 my-4">
                            Check out our Download Center to easily find all our PDFs and resources about our flooring products.
                        </p>
                        <a href="/downloadCenter" className="button py-1 px-3 mb-4 respCption small">BROCHURE & DOWNLOAD CENTER</a>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Download