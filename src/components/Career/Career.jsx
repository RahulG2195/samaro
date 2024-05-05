'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import './Career.css'
// import Form from '../InquiryForm/Form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Career = () => {
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (value) => {
        setPhone(value);
    };
    return (
        <div className='mt-5 pt-5 careerCont'>



            {/* <Image
                src="/assets/images/career/creer_banner.png"
                alt="Description of the image"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                priority={true}
                loading="eager"
            /> */}

            <div className='headingCont text-center my-5'>
                <h1 className=' careerHeading my-4 fw-bold'><u className='border-3 border-danger border-bottom '>Career</u></h1>
            </div>
            <div className='text-center whyus'>
                <h4>Why join us ?</h4>
                <p className='w-25 mx-auto small'>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 careerform">
                        <form >
                            <div className="mb-3">
                                {/* <label htmlFor="name" className="form-label px-2 fw-medium career_form_lable">Name<span className='text-danger fw-bold'>*</span></label> */}
                                <input type="text" className="form-control " id="name" placeholder="Name" required />
                            </div>
                            <div className="mb-3">
                                {/* <label htmlFor="email" className="form-label px-2 fw-medium career_form_lable">Email<span className='text-danger fw-bold'>*</span></label> */}
                                <input type="email" className="form-control " id="email" placeholder="Email" required />
                            </div>
                            <div className="mb-3 ">
                                {/* <label htmlFor="phone" className="form-label px-2 fw-medium career_form_lable">Phone Number<span className='text-danger fw-bold'>*</span></label> */}
                                {/* country code drop  */}
                                <div className="">
                                    <PhoneInput
                                        country={'in'}
                                        value={phone}
                                        onChange={handlePhoneChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                {/* <label htmlFor="message" className="form-label px-2 fw-medium career_form_lable">Message</label> */}
                                <input className="form-control " id="message" rows="4" placeholder="Position" ></input>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn Csubmitbtn text-danger border-2 border-danger fw-semibold  rounded-pill py-0 px-5 ">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            {/* <div className='my-5'>
                <Image
                    src="/assets/images/career/Group 28568.png"
                    alt="Description of the image"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    priority={true}
                    loading="eager"
                />
            </div> */}

        </div>
    )
}

export default Career