import React from "react";

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductCard from "@/components/Product/ProductCard";

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
  margin: 20,
  nav: true,
  navText: [
    '<img src="assets/images/icons/left.svg" />',
    '<img src="assets/images/icons/right.svg" />',
  ],
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    400: {
      items: 2,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
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
  {
    frontImage:
      "/assets/images/products/Images Web/LVT WEBP/SAM 0002 Dark.webp",
    onHoverImage: "assets/images/products/Group 28395 (2).png",
    title: "Pure oak honey",
    description: "VINYL | CRIO | AVHBU40360",
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

  // Adjust paths as necessary for additional products
];
const SimilarProd = ({ Title1, Title2 }) => {
  return (
    <>
      <section className="similarprod common_sec">
        <div className="container-fluid-custom">
          <div className="sec_header text-center my-4">
            <h2 className="section_heading">
              {Title1} <strong>{Title2}</strong>
            </h2>
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
  );
};

export default SimilarProd;
