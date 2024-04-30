import React from 'react'
import './SpcForm.css'

const SpcForm = ({hideguide, contactformcol}) => {
    return (
        <>
            <div className='row container mx-auto py-5 justify-content-between align-items-center'>
                <div className={`col-md-4 ${hideguide ? 'hideguide' : ''}`}>
                    <span className='spcformheading'>
                        <p className='fs-5 guidHeading '>LET US GUIDE YOU</p>
                        <p className='fs-5 guidHeading subH fw-normal py-2'>TO YOUR PERFECT SPC FLOOR</p>
                        <p className='fw-medium txt'>Choosing the perfect floor is not easy, but we would love to help you with the challenge. Together we will find a vinyl floor that fits your home perfectly.</p>
                    </span>
                </div>

                <div className={`${contactformcol ?'col-md-10':'col-md-6'}` }>
                    <form className='spcform'>
                        <div className="mb-3">
                            <input type="text" className="form-control border-0 " placeholder="Name" />
                        </div>

                        <div className='row'>
                            <div className="mb-3 col-md-6 col-lg-6 col-sm-6">
                                <input type="email" className="form-control border-0" placeholder="Email" />
                            </div>
                            <div className="mb-3 mobileSbmtResp col-md-6 col-lg-6 col-sm-6">
                                {/* country code drop  */}
                                <div className="d-flex align-items-center">+91
                                    <input type="tel" className=" form-control border-0" placeholder="Mobile" /></div>
                            </div>
                        </div>

                        <div className='row my-4 '>
                            <p>Select any one</p>

                            <div className='col-md-6 slct1 my-2'>
                                <input type="radio" name="example" className='me-2 form-check-input' />
                                <label for="radio-red1">Wholesaler/Distributors</label>
                            </div>
                            <div className='col-md-6 slct1 my-2'>
                                <input type="radio" name="example" className='me-2 form-check-input' />
                                <label for="radio-red2">Commercial Projects</label>
                            </div>
                            <div className='col-md-6 slct1 my-2'>
                                <input type="radio" name="example" className='me-2 form-check-input' />
                                <label for="radio-red3">For customer/ Project inquiry</label>
                            </div>
                            <div className='col-md-6 slct1 my-2'>
                                <input type="radio" name="example" className='me-2 form-check-input' />
                                <label for="radio-red4">OEM</label>
                            </div>

                            <div className="my-3">
                                <textarea type="text" className="form-control border-0 " placeholder="Your Message" />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p type="submit" className=" callBTN btn px-5 py-0 rounded-pill fw-semibold">Get a free call</p>
                            </div>
                        </div>


                    </form>

                </div>

            </div>
        </>
    )
}

export default SpcForm