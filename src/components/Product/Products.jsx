import React, { useState, useEffect, useRef } from 'react';
import Filters from './Filters';
import ProductCard from './ProductCard';
import './Filters.css';
import { useParams } from 'next/navigation';
import axios, { all } from 'axios';

const Products = () => {
    const router = useParams();
    const variation = router.slug;

    // console.log("slug", variation);

    const productsArr = [
        {
            frontImage: "/assets/images/products/AllData/502 - Swiss light WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/AllData/502 - Swiss light WITHOUT INSTALLATION.webp",
            title: "Swiss light",
            description: "LVT | WOOD | SAM 502"
        },
        {
            frontImage: "/assets/images/products/AllData/503 - Tulip tree INSTALLATION.webp",
            onHoverImage: "/assets/images/products/AllData/503 - tulip tree WITHOUT INSTALLATION.webp",
            title: "Tulip tree",
            description: "LVT | WOOD | SAM 503"
        },
        {
            frontImage: "/assets/images/products/AllData/505 - maplewood INSTALLATION.webp",
            onHoverImage: "/assets/images/products/AllData/505 - maplewood WITHOUT INSTALLATION.webp",
            title: "Clay Oak",
            description: "LVT | WOOD | SAM 0037"
        },
    ];
    const [productsData, setProductsData] = useState(productsArr);
    // console.log("here is data ", productsData)
    const [showInteriorPictures, setShowInteriorPictures] = useState(true);

    const effectRan = useRef(false);
    useEffect(() => {
        if (effectRan.current === false) {
            const getProducts = async () => {
                const RawData = await axios.get("/api/products",variation);
                const products = RawData.data;
                let filteredProducts;
                if (variation === 'All') {
                    setProductsData(products);

                } else {
                    filteredProducts = products.filter(product => product.variation.toLowerCase() === variation.toLowerCase());
                    // console.log("Filtered products:", filteredProducts);
                    setProductsData(filteredProducts);

                }
            };
            getProducts();
            return () => {
                effectRan.current = true;
            };
        }
    }, []);

    const handleCheckboxChange = () => {
        setShowInteriorPictures(!showInteriorPictures);
    };

    return (
        <div className="px-5 prdctContainer position-relative">
            <div className="row justify-content-center">
                <div className="row align-items-center"></div>
                <div className="col-lg-2 col-md-3">
                    <Filters />
                </div>
                <div className="col-lg-10 col-md-9">
                    <div className="samSearchResp mb-md-5">
                        <div className="input-group p-md-0">
                            <input type="text" className="form-control search-bar prdctSearch px-2 py-0 pb-1" placeholder="Search your floor" style={{ lineHeight: 'normal' }} />
                            <div className="input-group-append">
                                <div className="input-group-text bg-transparent border-0">
                                    <i className="bi bi-search"></i>
                                </div>
                            </div>
                            <div className="input-group-append interiorcheck">
                                <div className="form-check">
                                    <input className="mx-1 form-check-input" type="checkbox" checked={showInteriorPictures} onChange={handleCheckboxChange} />
                                    <label className="darkBlue">Show interior pictures</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-md-3 row-cols-sm-3 row-cols-xs-1 row-cols-lg-3 row-cols-xl-5 mt-md-2">
                        {productsData.map((product, index) => (
                            <div key={index} className="col-6">
                                <ProductCard
                                    frontImage={`/assets/images/products/AllData/${product.prod_images}`}
                                    onHoverImage={showInteriorPictures ? `/assets/images/products/AllData/${product.prod_image2}` : null}
                                    title={product.prod_name}
                                    description={product.prod_spiece}
                                    seo={product.seo_url}
                                />
                            </div>
                        ))}

                    </div>
                    <div className='d-flex justify-content-center'>
                        <a className="discoverBtn load_more button mx-auto text-center" href="/product">Load More</a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
