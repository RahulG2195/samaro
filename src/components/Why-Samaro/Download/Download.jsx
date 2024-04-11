import React from 'react';
import "./Download.css";
import Link from 'next/link';
const Download = () => {
    return (
        <section className='download mt-5'>
            <div className="row g-0">
                <div className="col-lg-6">
                    <Link href='/'>
                        <div className="download-img">
                            <img src="/assets/images/why-samaro/downloads/download-1.jpg" />
                            <p className="text">
                                Download SPC Flooring <br /> Lookbook
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href='/'>
                        <div className="download-img">
                            <img src="/assets/images/why-samaro/downloads/download-2.jpg" />
                            <p className="text">
                                Download SPC Flooring <br /> Lookbook
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Download