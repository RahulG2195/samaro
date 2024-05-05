import React from 'react'
import './Newsletter.css'

const NewLaunchCard = () => {
    return (
        <>
            <div className='row my-5 align-items-center newlaunchCard'>
                <div className='col-md-8 '>
                    <img src="/assets/images/Newletter/Mask Group 265.png" alt="err" />
                </div>
                <div className='col-md-4 cardCont position-absolute'>
                    <div className='card px-4 py-5 rounded-4'>
                        <div className="cardBody py-3">
                            <h5 className=''>Get to know our SPC Collection</h5>
                            <p className=' m-0 pb-3 p-0 fw-normal'>True to nature's design. With its elegance and authenticity, it is almost impossible to distinguish Capture from real wood. Our high-quality floors are the result of refined craftmanship and innovation. That is why you cannot miss out on our Capture laminate floors.</p>
                            <button className='btn text-danger border-3 border-danger rounded-pill py-0 px-4 me-2 fw-semibold'>Discover SPC Flooring</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default NewLaunchCard