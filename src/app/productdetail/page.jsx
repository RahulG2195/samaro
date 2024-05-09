'use client'
import React, { useState, useEffect } from 'react';

import Link from "next/link";
import Image from 'next/image';
import dynamic from "next/dynamic";
import ProductFeature from '@/components/ProductDetail/ProductFeature';
import ProdTable from '@/components/ProductDetail/ProdTable';
import Design from '@/components/ProductDetail/Design';
import DownloadBroch from '@/components/ProductDetail/DownloadBroch';
import SimilarProd from '@/components/ProductDetail/SimilarProd';
import Inspiration from '@/components/Home/Social/Inspiration';
import ProductSwipper from '@/components/ProductDetail/ProductSwipper';
import '@/components/ProductDetail/productdetail.css';

const Home = () => {

  const prod_features = [
    {
      'key': '1',
      'image': '/assets/images/icons/Group 126.svg',
      'title': 'Water resistant',
      'desc': 'Say goodbye to moisture problems by choosing for a water resistant Samaro floor. These floors don\'t just look exceptionally stylish and natural, they are also 100% resistant to surface moisture, which makes cleaning easier than ever!'
    },
    {
      'key': '2',
      'image': '/assets/images/icons/Group 117.svg',
      'title': 'Scratch & Stain Guard',
      'desc': 'Enjoy your vinyl floor for many years to come thanks to the sealed top layer with Stain and Scratch Guard technology. This layer ensures superior protection from scratches, stains, dirt and scuff marks.'
    },
    {
      'key': '3',
      'image': '/assets/images/icons/Group 115.svg',
      'title': 'Click-n-lock',
      'desc': 'Samaro is the inventor of the Uniclic installation system, today the standard click-to-install system. Use the revolutionary and patented click system to effortlessly click your floor planks together.'
    },
    {
      'key': '4',
      'image': '/assets/images/icons/Group 132.svg',
      'title': '100% RECYCLABLE',
      'desc': 'Samaro is much more than just floors. For every floor we offer, you can find a full collection of accessories, including underlays, finishing profiles and skirting boards that perfectly match the colour of your floor.'
    },
  ]

  var $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }

  // This is for Next.js. On Rect JS remove this line
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const images = [
    {
      id: 1,
      url: 'assets/images/products/lg1.png',
      alt: 'large image'
    },
    {
      id: 2,
      url: 'assets/images/products/sm1.png',
      alt: 'large image'
    },
    {
      id: 3,
      url: 'assets/images/products/sm2.png',
      alt: 'large image'
    },
    {
      id: 4,
      url: 'assets/images/products/sm3.png',
      alt: 'large image'
    },
    {
      id: 5,
      url: 'assets/images/products/sm4.png',
      alt: 'large image'
    },
    {
      id: 6,
      url: 'assets/images/products/sm5.png',
      alt: 'large image'
    },
  ]


  // data for product details table 
  // ####################Description table data #########################
  const descriptionData = [
    {
      description: 'Lorem ipsum ',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum ',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum',
      standardTest: 'Lorem'
    },
    {
      description: 'Lorem ipsum',
      standardTest: 'Lorem'
    }
  ];
  // ############################# Specification tables data ####################
  const specificationData = [
    {
      specification: 'Lorem ipsum dolor.',
      Tiles: 'Lorem'
    },
    {
      specification: 'Lorem ipsum dolor',
      Tiles: 'Lorem'
    },
    {
      specification: 'Lorem ipsum dolor',
      Tiles: 'Lorem'
    },
    {
      specification: 'Lorem ipsum dolor',
      Tiles: 'Lorem'
    },
    {
      specification: 'Lorem ipsum dolor',
      Tiles: 'Lorem'
    },
    {
      specification: 'Lorem ipsum dolor',
      Tiles: 'Lorem'
    },


  ];
  return (
    <>
      <section className='product-data_sec mt-md-5 mt-2'>
        <div className='container'>
          <div className='row justify-content-end '>
            <div className='col-md-6 col-12 col-xl-5 position-relative '>
              <ProductSwipper images={images} />
            </div>
            <div className='col-md-6 col-12 col-xl-5 prodDetailTXT'>
              <div className='prod_name_lg'>
                <h2>Pure ok honey</h2>
                <span>VINYL | CIRO | AVHBU40360</span>
              </div>
              {/*####################################### product description table ######################################## */}
              <div className='DescriptionTable'>
                <div className='d-flex gap-1'>
                  <div className='w-100'>
                    <div>
                      <p className='bg-danger m-0 text-center py-2 text-white fw-semibold'>DESCRIPTION</p>
                      {descriptionData.map((row, index) => (
                        <p key={index} className='border-bottom border-dark-subtle m-0'>{row.description}</p>
                      ))}
                    </div>
                  </div>
                  <div className='w-100'>
                    <p className='bg-danger m-0 text-center py-2 text-white px-2 fw-semibold'>STANDARD TEST</p>
                    <div style={{ backgroundColor: '#E0E1E3' }}>
                      {descriptionData.map((row, index) => (
                        <p key={index} className='border-bottom border-dark-subtle m-0 px-2'>{row.standardTest}</p>
                      ))}
                    </div>
                  </div>
                </div>


                {/*################################## product description table end ############################################*/}

                {/*################################## Products specification table ##########################################*/}

                <div className='d-flex gap-1 mt-4'>
                  <div className='w-100'> 
                    <div>
                      <p className='bg-danger m-0 text-center py-2 text-white fw-semibold'>SPECIFICATIONS</p>
                      {specificationData.map((row, index) => (
                        <p key={index} className='border-bottom border-dark-subtle m-0'>{row.specification}</p>
                      ))}
                    </div>
                  </div>
                  <div className='w-100'>
                    <p className='bg-danger m-0 text-center  text-white fw-semibold longTxtTiles '>SAMARO LAMINATE PERFORMANCE TILES</p>
                    <div style={{ backgroundColor: '#E0E1E3' }}>
                      {specificationData.map((row, index) => (
                        <p key={index} className='border-bottom border-dark-subtle m-0 px-2'>{row.Tiles}</p>
                      ))}
                    </div>
                  </div>
                </div>




                {/*#################################### Products specification table  ############################################*/}


              </div>
            </div>
          </div>
        </div>

        {/* ################# product details section ################### */}
      </section >
      <section className='productDetail_data my-md-5 my-2'>
        <div className='container'>
          <div className='sec_head'>
            <h3 className='text-capitalize py-md-4 py-2 text-center'><strong> Product Details</strong></h3>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='inner_sub_head'>
                <h4 className='fw-semibold text-navy'>Product features</h4>
              </div>
              {
                prod_features.map(val => (
                  <ProductFeature key={val.key} img={val.image} desc={val.desc} title={val.title} />
                ))
              }
            </div>
            <div className='col-md-5'>
              <div className='dimension'>
                <div className='inner_sub_head'>
                  <h4 className='m-0 fw-semibold text-navy'>Dimensions</h4>
                  <ProdTable />
                </div>
              </div>
              <div className='Design'>
                <div className='inner_sub_head'>
                  <h4 className='fw-semibold text-navy'>Design</h4>
                  <Design />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='inspectionBanner '>
        <div className='inspection_heading d-md-flex py-md-3 mx-auto text-center justify-content-center align-items-center'>
          <h2 className='text-white propInspec'>Get your Property Inspection</h2>
          {/* <button className='freecallbtn'>Get A Free call</button> */}
          <p  className="mobilebutton button mt-3 fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal">Get A Free Call</p>
        </div>
      </section>
      {/* download brochue section  */}
      <DownloadBroch />
      {/* download brochue section  end */}

      {/* Similar product Start */}
      <SimilarProd Title1='Similar' Title2='Floors' />
      {/* Similar product end */}

      {/* More Flooring Start */}
      <SimilarProd Title1='More' Title2='Flooring' />
      {/* More Flooring end */}
      <Inspiration />
    </>
  )
}

export default Home