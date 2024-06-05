import Link from 'next/link'
import React from 'react'
import './Filters.css'

const ProductCard = ({ frontImage, onHoverImage, title, description, seo }) => {
    return (
        <>
            <div className="card productCard my-3 mx-0" style={{ width: '100%' }} >
                <Link href={`/productdetail/${seo}`}>
                    <div className='frontimage'><img src={frontImage} className="card-img-top " alt="..." /></div>
                    {
                        onHoverImage && <div className='onHoverimage'><img src={onHoverImage} className="card-img-top " alt="..." /></div>
                    }
                </Link>

                <Link href={`/productdetail/${seo}`}>
                    <div className="card-body p-0 pb-1 text-center">
                    <span className="fw-semibold  prdctName ">{title}</span>
                    <p className='small darkBlue'>{description}</p>
                </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard