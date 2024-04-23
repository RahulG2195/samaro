import React from 'react'

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductCard from '@/components/Product/ProductCard'

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<img src="assets/images/icons/left.svg" />', '<img src="assets/images/icons/right.svg" />'],
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    400: {
      items: 2,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    700: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
};

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
const SimilarProd = ({ Title1, Title2 }) => {
  return (
    <>
      <section className='similarprod common_sec'>
        <div className='container-fluid-custom'>
          <div className='sec_header text-center my-4'>
            <h2 className='section_heading'>{Title1} <strong>{Title2}</strong></h2>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            autoplay
            margin={4}
            nav={true}
            dots={false}
            animateIn={true}
            {...options}
          >
            {productsArr.map((product, index) => (
                <ProductCard
                  frontImage={product.frontImage}
                  // onHoverImage={product.onHoverImage}
                  title={product.title}
                  description={product.description}
                />
            ))}
          </OwlCarousel>
        </div>
      </section>
    </>
  )
}

export default SimilarProd