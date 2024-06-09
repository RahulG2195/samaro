import React from "react";
import "./Banner.css";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
    return (
        <section className="hero ">
            <div className="position-relative">
                <div className="homepageHeroBanner" >

                    <Image
                        src="/assets/images/home/banner/Mask Group 320.png"
                        // src=''
                        alt="Description of the image"
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                        priority={true}
                        loading="eager"
                        className='prdctdeskbanner'

                    />
                    <Image
                        src="/assets/images/home/banner/Group 28545.png"
                        alt="Description of the image"
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="contain"
                        priority={true}
                        loading="eager"
                        className='prdctmobilebanner'

                    />
                </div>
                <div className=" HomebannertextCont position-absolute">

                    <div className="txt ">
                        <h2 className="heading w-75 fw-normal">
                            Premium Quality <strong className="fw-bold"><Link href={'/#'}>SPC</Link> & <Link href={'/#'}>LVT</Link></strong> flooring .
                        </h2>
                        <Link href="/product" className="discoverBtn button d-inline-block px-3 py-1">
                            Discover all our floors
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
