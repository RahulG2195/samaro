"use client";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Banner = () => {
    const [bannerImages, setBannerImages] = useState([]);
    const [mobileBannerImages, setMobileBannerImages] = useState([]);
    const [formattedContent, setFormattedContent] = useState("");

    useEffect(() => {
        const fetchBanner = async () => {
            const response = await axios.get("/api/admin/heroBanners");
            const banner = response.data.find(banner => banner.banner_id === 1);

            if (banner) {
                setBannerImages(banner.banner_img.split(',')); // Split desktop images by comma
                setMobileBannerImages(banner.mobileBanner_img.split(',')); // Split mobile images by comma
                setFormattedContent(formatContent(banner.banner_content, banner.spcLink, banner.lvtLink));
            }
        };

        fetchBanner();
    }, []);

    const formatContent = (content, spcLink, lvtLink) => {
        return content 
            ? content.split(' ').map((word, index) => {
                if (word === "SPC") {
                    return <strong key={index} className="fw-bold"><Link href={spcLink || '/#'}>{word}</Link></strong>;
                } else if (word === "LVT") {
                    return <strong key={index} className="fw-bold"><Link href={lvtLink || '/#'}>{word}</Link></strong>;
                } else if (word === "&") {
                    return ' & ';
                } else {
                    return ` ${word} `;
                }
            })
            : null;
    };

    return (
        <section className="hero">
            {/* Desktop Carousel */}
            <div id="desktopBannerCarousel" className="carousel slide d-none d-md-block" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    {bannerImages.map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="position-relative">
                                <div className="homepageHeroBanner">
                                    <Image
                                        src={`/uploads/${image}`}
                                        alt={`Desktop Banner Image ${index + 1}`}
                                        width={100}
                                        height={100}
                                        layout="responsive"
                                        objectFit="cover"
                                        priority={true}
                                        loading="eager"
                                        className="prdctdeskbanner"
                                    />
                                </div>
                                <div className="HomebannertextCont position-absolute">
                                    <div className="txt">
                                        <h2 className="heading w-75 fw-normal">
                                            {formattedContent}
                                        </h2>
                                        <Link href="/product/All" className="discoverBtn button d-inline-block px-3 py-1">
                                            Discover all our floors
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#desktopBannerCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#desktopBannerCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Mobile Carousel */}
            <div id="mobileBannerCarousel" className="carousel slide d-block d-md-none" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    {mobileBannerImages.map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="position-relative">
                                <div className="homepageHeroBanner">
                                    <Image
                                        src={`/uploads/${image}`}
                                        alt={`Mobile Banner Image ${index + 1}`}
                                        width={100}
                                        height={100}
                                        layout="responsive"
                                        objectFit="contain"
                                        priority={true}
                                        loading="eager"
                                        className="prdctmobilebanner"
                                    />
                                </div>
                                <div className="HomebannertextCont position-absolute">
                                    <div className="txt">
                                        <h2 className="heading w-75 fw-normal">
                                            {formattedContent}
                                        </h2>
                                        <Link href="/product/All" className="discoverBtn button d-inline-block px-3 py-1">
                                            Discover all our floors
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mobileBannerCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mobileBannerCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Banner;
