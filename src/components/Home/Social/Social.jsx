import React from 'react'
import "./Social.css";

const Social = () => {
    return (
        <section className="social">
            <div className="container">
                <h2 className="text-center ">let's get <span>social</span></h2>
                <div className='d-flex align-items-center justify-content-center mt-4 instagramimg'>
                    <div className='pb-3'><img src="/assets/images/home/social/Group 29049.svg" alt="err" className='w-75' /></div>
                    <div>
                    <a href="https://www.instagram.com/samaroflooring?igsh=amowMmMyeHU1eXVh" target="_blank">
                        <span className='instaid small'>@SAMAROFLORRING</span>
                        <p className='instabio'>Where Indian Craftsmanship Meets Global Luxury, Ready to Elevate Your World.</p>
                    </a>
                    </div>
                    {/* <a href="https://www.instagram.com/samaroflooring?igsh=amowMmMyeHU1eXVh" target="_blank"><img src="/assets/images/home/social/Group 28501.svg" alt="err" className='w-25 instagram my-2++*' /></a> */}
                </div>
                {/* <div className="row justify-content-center"> */}
                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12"> */}
                        <div className="d-flex justify-content-center gap-5">
                            <div className="image">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>
                            <div className="image">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>
                            <div className="image">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>
                            <div className="image">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default Social