import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import Link from 'next/link';

const ContactMap = () => {
    return (
        <>
            <div className='row gap-5 align-items-center justify-content-center'>
            <div className="inner-head-office col-md-3">
                            <div className="row">
                                <div className="py-3 px-3">
                                    <div className="office_heading">
                                        <div className='pb-'>
                                            <h5 className="text-Capitalize m-0 fw-bold"> Contact Information</h5>
                                            <span>Say something to start a live chat!</span>
                                        </div>
                                        <address className='py-4'>
                                            <h3 className='fw-bold'>For Enquires</h3>
                                            <div><span>info@samaro.in</span></div>
                                            <div><span>info@samaro.in</span></div>
                                        </address>
                                        <h3 className='fw-bold'>Head Office</h3>
                                        <span>213-215, Hubtown Solaris, N. S. Phadke Marg, Andheri (East), Mumbai-400069, India.</span>



                                        <div className="social-media pt-5 justify-content-start align-items-center">
                                            <div className="logo text-center">
                                                <Link href="#">
                                                    <span className='text-white '>Follow More</span>
                                                </Link>
                                            </div>
                                            <div className="social-media-inner gap-3">
                                                <div className="facebook">
                                                    <Link href="#">
                                                        <img className="img " src="/assets/images/social-media/fb.png" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="isntagram">
                                                    <Link href="#">
                                                        <img className="img" src="/assets/images/social-media/instagram.png" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="x">
                                                    <Link href="">
                                                        <img className="img" src="/assets/images/social-media/x.png" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="youtube">
                                                    <Link href="">
                                                        <img className="img" src="/assets/images/social-media/yt.png" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                <div className='col-lg-8'>
                    <iframe className='w-100'
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3769.781957334507!2d72.84704672466616!3d19.1172191006783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s213-215%2C%20Hubtown%20Solaris%2C%20N.%20S.%20Phadke%20Marg%2C%20Andheri%20(East)%2C%20Mumbai-400069%2C%20India.!5e0!3m2!1sen!2sin!4v1714199879899!5m2!1sen!2sin"
                        width="100" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}

export default ContactMap