import React from 'react';
import Filters from './Filters';
import ProductCard from './ProductCard';
import './Filters.css'

const Products = () => {
    const productsArr = [
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        // Adjust paths as necessary for additional products
    ];

    return (
        <div className="pe-5 ps-3 prdctContainer">
            <div className="row">
                {/* Filters */}
                <div className="col-lg-2 col-md-3">
                    <Filters />
                </div>
                <div className="col-lg-10 col-md-9 ">
                    <div className="row align-items-center ">
                        <div className="col-md-3 md-0 mt-2">
                            <p className="fw-bold fs-5 samFloor m-0">SAMARO FLOORS</p>
                            <span className="small shownCount">11 of 79 floors shown</span>
                        </div>
                        {/* Search Bar and Options */}
                        <div className="col-md-9 samSearchResp">
                            <div className="input-group px-3 p-md-0 ">
                                <input type="text" className="form-control search-bar prdctSearch px-2 py-0" placeholder="Search your floor" />
                                <div className="input-group-append">
                                    <div className="input-group-text bg-transparent border-0">
                                        <i className="bi bi-search"></i>
                                    </div>
                                </div>
                                <div className="input-group-append interiorcheck">
                                    <div className="form-check">
                                        <input className="mx-1 form-check-input" type="checkbox" />
                                        <label className="darkBlue">Show interior pictures</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-md-3 row-cols-sm-3 row-cols-xs-1 row-cols-lg-3 row-cols-xl-5">
                        {productsArr.map((product, index) => (
                            <div key={index} className="col-6 mb-4">
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
