import React from 'react';
import "./Footer.css";
import Form from '@/components/InquiryForm/Form';
const Footer = () => {
    return (
        <>
            <footer className="custom-footer bg-navy text-light pb-3">
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
                    <div className="row justify-content-center mt-2 g-5">
                        <div className="col-lg-4 col-md-8 ordr2">
                            <div className="row">
                                <div className="col-6 ps-5">
                                    <h3 className="footer-headings mb-3 text-white ">About Us</h3>
                                    <ul className="ps-0 d-flex flex-column footer-links gap-2">
                                        <li><a href="">Articles</a></li>
                                        <li><a href="">News and Events</a></li>
                                        <li><a href="">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 ps-5">
                                    <h3 className="footer-headings mb-3 text-white ">Products</h3>
                                    <ul className="ps-0 d-flex flex-column footer-links gap-2 ">
                                        <li><a href="">SPC Flooring</a></li>
                                        <li><a href="">LVT Flooring</a></li>
                                        <li><a href="">Ceramic</a></li>
                                        <li><a href="">Marbel</a></li>
                                        <li><a href="">Stone</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-5 ordr3">
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
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 ps-5 mt-0  ordr1">
                            <img src="/assets/images/home/footer/1000_F_435229236_4nOQpFgQ8bzvj60ff4B5eBcGSEdTyG2s.png" alt=""/>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='copyright py-2 bg-white text-center'>
                <p className='text-navy mb-0 small'>
                    Copyright © 2023 Samaro | <a href="https://crezvatic.com/" target="_blank">Powered by Crezvatic PVT. LTD.</a>
                </p>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content ">
                        <button type="button" className="btn-close p-0" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body p-0">
                            <Form></Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer