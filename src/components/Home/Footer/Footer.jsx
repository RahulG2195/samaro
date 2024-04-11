import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <>
            <footer className="custom-footer py-5 bg-navy text-light">
                <div className="row g-4 align-items-center">
                    <div className="col-5">
                        <div className="line"></div>
                    </div>
                    <div className="col-2 logo">
                        <img className="" src="/assets/images/logo/logo.png" alt="" />
                    </div>
                    <div className="col-5">
                        <div className="line"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center mt-4 g-5">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-6 ps-5">
                                    <h3 className="footer-headings mb-3 text-white">About Us</h3>
                                    <ul className="ps-0 d-flex flex-column footer-links gap-2">
                                        <li><a href="">Articles</a></li>
                                        <li><a href="">News and Events</a></li>
                                        <li><a href="">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 ps-5">
                                    <h3 className="footer-headings mb-3 text-white">Products</h3>
                                    <ul className="ps-0 d-flex flex-column footer-links gap-2">
                                        <li><a href="">Articles</a></li>
                                        <li><a href="">News and Events</a></li>
                                        <li><a href="">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-5">
                            <div className="d-flex gap-3">
                                <i className="fas fa-map-marker-alt d-block mt-2"></i>
                                <p>
                                    213-215, Hubtown Solaris, N. S. Phadke Marg, Andheri (East),
                                    Mumbai-400069, India.
                                </p>
                            </div>
                            <div className="contact-details d-flex gap-5 mt-3">
                                <div className="mail">
                                    <img src="/assets/images/home/topbar/mail.png" alt="" />
                                    <a href="mailto:">info@samaro.in</a>
                                </div>
                                <div className="phone">
                                    <img src="/assets/images/home/topbar/phone.png" alt="" />
                                    <a href="tel:">91-8079545115</a>
                                </div>
                            </div>
                            <div className="newsletter">
                                <input type="text" className="input" placeholder="Enter your email Id for Newsletter" />
                                <button>Submit</button>
                            </div>
                        </div>
                        <div className="col-lg-3 ps-5">
                            <img src="/assets/images/home/footer/logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
            <div className='copyright py-4 bg-white text-center'>
                <p className='text-navy mb-0'>
                    Copyright © 2023 Samaro | Powered by Crezvatic PVT. LTD.
                </p>
            </div>
        </>
    )
}

export default Footer