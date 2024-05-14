import React from 'react';
import Filters from './Filters';
import ProductCard from './ProductCard';
import './Filters.css'

const Products = () => {
    const productsArr = [
        // lVT PRODUCTS
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0002 Dark.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Mountain Brown (Dark)",
            description: "LVT | WOOD | SAM 0002"
        },
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0002 Light.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Mountain Brown (Light)",
            description: "LVT | WOOD | SAM 0002"
        },
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0037.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Clay Oak",
            description: "LVT | WOOD | SAM 0037"
        },
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0039.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Natural Wood",
            description: "LVT | WOOD | SAM 0039"
        },
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0040.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "European Oak",
            description: "LVT | WOOD | SAM 0040"
        },
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0042.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Cinamon Wood",
            description: "LVT | WOOD | SAM 0042"
        },
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0043.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Canyon Brown",
            description: "LVT | WOOD | SAM 0043"
        },
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0044.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Hickory Brown",
            description: "LVT | WOOD | SAM 0044"
        },
        {
            frontImage: "/assets/images/products/Images Web/LVT WEBP/SAM 0045.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Beach Gold",
            description: "LVT | WOOD | SAM 0045"
        },

        // spc PRODUCTS START 
        // SERIES 1- TUSCANY
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0008- Hickory smoke WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0008- Hickory smoke INSTALLATION.webp",
            title: "Hickory smoke",
            description: "SPC | TUSCANY | SAM0008"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0013 -Raven WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0013- Raven INSTALLATION.webp",
            title: "Raven",
            description: "SPC | TUSCANY | SAM0013"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0017- ginger gold  WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0017- ginger gold INSTALLATION.webp",
            title: "Ginger gold",
            description: "SPC | TUSCANY | SAM0017"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0024 - Ash grey WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0024 - Ash grey INSTALLATION.webp",
            title: "Ash grey",
            description: "SPC | TUSCANY | SAM0024"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0025 Ash WOOD WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0025 Ash wood INSTALLATION.webp",
            title: " Ash WOOD ",
            description: "SPC | TUSCANY | SAM0025"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0029 - Pebble WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0029 Pebble INSTALLATION.webp",
            title: "Pebble",
            description: "SPC | TUSCANY | SAM0029"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0031 - Raw honey WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0031 - Raw honey INSTALLATION.webp",
            title: "Raw honey",
            description: "SPC | TUSCANY | SAM0031"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0034 - Cherry wood INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0034 - Cherry wood INSTALLATION.webp",
            title: "Cherry wood",
            description: "SPC | TUSCANY | SAM0034"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0038 -Copper sand WITHOUT INSTALLTION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0038 - Copper sand INSTALLATION.webp",
            title: "Copper sand",
            description: "SPC | TUSCANY | SAM0038"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM501 - Casper grey WITHOIUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM501 - Casper grey INSTALLATION.webp",
            title: "Casper grey",
            description: "SPC | TUSCANY | SAM501"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM0529 - chester hills WITHOUT INSTALLATION.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Chester hills",
            description: "SPC | TUSCANY | SAM0529"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 1- TUSCANY/SAM504 -  Vintage oak  WITHOUT INSTALLATION.webp",
            onHoverImage: "assets/images/products/Group 28395 (2).png",
            title: "Vintage oak",
            description: "SPC | TUSCANY | SAM504"
        },

        // SERIES 2- SICILIAN ()
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/502 - Swiss light  WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/502 - Swiss light  WITHOUT INSTALLATION.webp",
            title: "Swiss light",
            description: "SPC | SICILIAN | 502"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/503 - Tulip tree INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/503 - tulip tree WITHOUT INSTALLATION.webp",
            title: "Tulip tree",
            description: "SPC | SICILIAN | 503"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/522 - Teak finish WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/522 - Teak finish INSTALLATION.webp",
            title: "Teak finish",
            description: "SPC | SICILIAN | 522"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/505 -  maplewood WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/505- maplewood INSTALLATION.webp",
            title: " Maplewood",
            description: "SPC | SICILIAN | 505"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/523 -  oakfield WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/523 - Oakfield INSTALLATION.webp",
            title: "Oakfield",
            description: "SPC | SICILIAN | 523"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/524- Sol butter WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/524 - Sol butter INSTALLATION.webp",
            title: " Butter",
            description: "SPC | SICILIAN | 524"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/526 - Cedar hollow WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/526 - Cedar hollow WITH INSTALLATION.webp",
            title: "Cedar hollow",
            description: "SPC | SICILIAN | 526"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/527 - Oak natural WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/527 - Oak natural  INSTALLATION.webp",
            title: " Oak natural",
            description: "SPC | SICILIAN | 527"
        },
        {
            frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/528 - Ashford INSTALLATION.webp",
            onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/528 - Ashford WITHOUT INSTALLATION.webp",
            title: " Ashford",
            description: "SPC | SICILIAN | 528"
        },
        // {
        //     frontImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/532 - Walnut oak WITHOUT INSTALLATION.webp",
        //     onHoverImage: "/assets/images/products/Images Web/SPC WEBP/SERIES 2- SICILIAN/532 - Walnut oak INSTALLATION.webp",
        //     title: "Walnut oak",
        //     description: "SPC | SICILIAN | 532"
        // },



        // Adjust paths as necessary for additional products
    ];

    return (
        <div className=" px-5 prdctContainer position-relative">
            <div className="row justify-content-center">
                {/* Filters */}
                <div className="row align-items-center">
                    <div className="col-md-3 md-0 mt-2 lh-1">
                        <p className="fw-bold fs-2 samFloor m-0">SAMARO FLOORS</p>
                        <p className='m-0 p-0 small fw-semibold text-navy'>Home -&gt; Products</p>
                        <span className="small shownCount text-navy">11 of 79 floors shown</span>
                    </div>
                    {/* Search Bar and Options */}
                    <div className="col-md-9 samSearchResp">
                        <div className="input-group  p-md-0 ">
                        <input type="text" className="form-control search-bar prdctSearch px-2 py-0 pb-1 " placeholder="Search your floor" style={{ lineHeight: 'normal' }} />
                                <div className="input-group-append ">
                                    <div className="input-group-text bg-transparent border-0">
                                        <i className="bi bi-search "></i>
                                    </div>
                                </div>
                            <div className="input-group-append interiorcheck">
                                <div className="form-check">
                                    <input className="mx-1 form-check-input" type="checkbox" defaultChecked />
                                    <label className="darkBlue">Show interior pictures</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3">
                    <Filters />
                </div>

                <div className="col-lg-10 col-md-9 ">

                    <div className="row row-cols-md-3 row-cols-sm-3 row-cols-xs-1 row-cols-lg-3 row-cols-xl-5">
                        {productsArr.map((product, index) => (
                            <div key={index} className="col-6 ">
                                <ProductCard
                                    frontImage={product.frontImage}
                                    onHoverImage={product.onHoverImage}
                                    title={product.title}
                                    description={product.description}
                                />
                            </div>
                        ))}


                    </div>

                </div>
            </div>

        </div>
    );
}

export default Products;
