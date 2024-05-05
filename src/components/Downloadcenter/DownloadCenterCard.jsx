import React from 'react'
import './dwnld.css'
import Image from 'next/image'

const DownloadCenterCard = ({imgurl ,title, date, author,}) => {
    return (
        <>
            <div className="card dwnldcard">
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <Image
                    src={imgurl}
                    alt="err"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    priority={true}
                    loading="eager"
                />
                <div className="card-body text-center lh-1 m-0 px-0  ">
                    <span className="card-text fw-medium">{title}</span>
                    <p className='small pt-2'>{date}| By {author}</p>
                    <button className='Downloadbtn text-danger border-danger rounded-pill py-2 me-2 fw-semibold w-100'>Download</button>
                </div>
            </div>
        </>
    )
}

export default DownloadCenterCard