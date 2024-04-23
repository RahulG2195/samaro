import React from 'react'

const ProductCard = ({ frontImage, onHoverImage, title, description }) => {
    return (
        <>
            <div className="card productCard my-4 mx-0" style={{ width: '100%' }} >
                <div className='frontimage'><img src={frontImage} className="card-img-top " alt="..." /></div>
                {
                    onHoverImage && <div className='onHoverimage'><img src={onHoverImage} className="card-img-top " alt="..." /></div> 
                }
                

                {/* <div className="card-body p-0 pb-1 text-center">
                    <span className="fw-semibold  prdctName ">{title}</span>
                    <p className='small darkBlue'>{description}</p>
                </div> */}
            </div>
        </>
    )
}

export default ProductCard