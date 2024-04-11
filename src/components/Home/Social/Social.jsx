import React from 'react'
import "./Social.css";

const Social = () => {
    return (
        <section className="social">
            <div className="container">
                <h2 className="text-center">let's get <span>social</span></h2>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-10">
                        <div className="social-grid">
                            <div className="image">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>
                            <div className="image">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>
                            <div className="image">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>

                            <div className="image col-span-2">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>

                            <div className="image">
                                <img src="/assets/images/home/social/1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social