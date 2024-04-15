import Image from 'next/image'
import React from 'react'
import './Career.css'
import Form from '../InquiryForm/Form'

const Career = () => {
    return (
        <div className='mb-5'>

<Form></Form>

            <Image
                src="/assets/images/career/creer_banner.png"
                alt="Description of the image"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                priority={true}
                loading="eager"
            />
            <div className='headingCont text-center my-5'>
                <h1 className=' fw-semibold  careerHeading my-4'>If we have any openings we will contact you!</h1>  
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label px-2 fw-medium career_form_lable">Name<span className='text-danger fw-bold'>*</span></label>
                                <input type="text" className="form-control border-3 border-danger rounded-pill" id="name" placeholder="Name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label px-2 fw-medium career_form_lable">Email<span className='text-danger fw-bold'>*</span></label>
                                <input type="email" className="form-control border-3 border-danger rounded-pill" id="email" placeholder="Email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label px-2 fw-medium career_form_lable">Phone Number<span className='text-danger fw-bold'>*</span></label>
                                <input type="tel" className="form-control border-3 border-danger rounded-pill" id="phone" placeholder="Phone Number" required />
                            </div>
                            <div className="mb-3 w-50">
                                <label htmlFor="resume" className="form-label px-2 fw-medium career_form_lable">Resume<span className='text-danger fw-bold'>*</span></label>
                                <input type="file" className="small form-control  border-3 border-danger rounded-pill" id="resume" title="Upload resume" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label px-2 fw-medium career_form_lable">Message</label>
                                <textarea className="form-control border-danger rounded-4" id="message" rows="4" placeholder="message" ></textarea>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn Csubmitbtn text-danger border-2 border-danger fw-semibold  rounded-pill py-0 px-5 ">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div className='my-5'>
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
            </div>
           
        </div>
    )
}

export default Career