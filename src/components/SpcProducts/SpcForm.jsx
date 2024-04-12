import React from 'react'
import './SpcForm.css'

const SpcForm = () => {
    return (
        <>
            <div className='row container mx-auto py-5 g-3'>
                <div className='col-md-6'>
                    <span className='spcformheading'>
                        <p className='fs-5 guidHeading'>LET US GUIDE YOU</p>
                        <p className='fs-5 guidHeading fw-normal py-2'>TO YOUR PERFECT SPC FLOOR</p>
                        <p className='fw-medium'>Choosing the perfect floor is not easy, but we would love to help you with the challenge. Together we will find a vinyl floor that fits your home perfectly.</p>
                    </span>
                </div>

                <div className='col-md-6'>
                    <form className='spcform'> 
                        <div className="mb-3">
                            <input type="text" className="form-control border-0 " placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control border-0 " placeholder="Email" />
                        </div>
                        <div className="position-relative mb-3 d-flex gap-2">
                            <input type="tel" className="form-control border-0 w-75" placeholder="Mobile" />
                            <button type="submit" className="btn submitbtn px-5 py-0 rounded-pill border-3 border-danger text-danger fw-semibold">Submit</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default SpcForm