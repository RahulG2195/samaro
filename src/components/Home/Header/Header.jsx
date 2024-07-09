
"use client"

import React, { useEffect, useState } from "react";
import "./Header.css";
import Link from "next/link";
import NavLink from "@/components/helpers/NavLink/NavLink";
import FollowMore from "../FollowMore/FollowMore";

const Header = () => {



  
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (

        <header className="header  ">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand" href="/" >
                        <img src="/assets/images/logo/main-logo.png" alt="" />
                    </Link>
                    <div className="d-flex gap-3 align-items-center ">
                        <div className="headphoneJack">
                            <img src="/assets/images/icons/Group 28600.svg" alt="err" />
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleMenu} // Toggle menu on button click
                        >

                            {/* <span className="navbar-toggler-icon"></span> */}
                            <img src="/assets/images/icons/Group 28769.svg" alt="err" />
                        </button>
                    </div>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item" onClick={closeMenu}>
                                <NavLink href="/">Home</NavLink>
                            </li>
                            <li className="nav-item "  onClick={closeMenu}>
                                <NavLink href="/why-samaro">Why Samaro</NavLink>
                            </li>
                            <li className="nav-item position-relative prdcts"  onClick={closeMenu}>
                                <NavLink className="prdctHeading" href="/product/All">Product</NavLink>
                                {/* <ul className=" prdctDrop drop1 px-5 position-absolute">
                                    <li><Link href="/spcProducts"><p className="darkBlue">SPC</p></Link></li>
                                    <li><Link href="/lvtProducts"><p className="darkBlue">LVT</p></Link></li>
                                </ul>
                                <ul className="mobileoptions">
                                    <li><Link href="/spcProducts">SPC</Link></li>
                                    <li><Link href="/lvtProducts">LVT</Link></li>
                                </ul> */}
                            </li>
                            <li className="nav-item position-relative prdcts inspiration">
                                <div className="inspi " >
                                    <NavLink href="/gallery" className="lnk "> Inspiration</NavLink>
                                </div>
                                <ul className=" prdctDrop px-4 position-absolute">
                                    <li onClick={closeMenu}><Link href="/gallery"><p className="darkBlue">Gallery</p></Link></li>
                                    <li onClick={closeMenu}><Link href="/FindYourMatch"><p className="darkBlue">Find your ideal floor</p></Link></li>
                                    <li onClick={closeMenu}><Link href="/downloadCenter"><p className="darkBlue">Download center</p></Link></li>
                                </ul>

                            </li>
                            <span className="mobileoptions" >

                                <li className="nav-ite"  onClick={closeMenu}><NavLink className="nav-link" href="/gallery">Gallery</NavLink></li>
                                <li className="nav-ite"  onClick={closeMenu}><NavLink className="nav-link" href="/FindYourMatch">Find your ideal floor</NavLink></li>
                                <li className="nav-ite"  onClick={closeMenu}><NavLink className="nav-link" href="/downloadCenter">Download center</NavLink></li>
                            </span>
                            <li className="nav-item" onClick={closeMenu}>
                                <NavLink className="nav-link" href="/newsletter">
                                    Newsletter
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={closeMenu}>
                                <NavLink className="nav-link" href="/contact-us">
                                    Contact Us
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" href="/career">
                                    Career
                                </NavLink>
                            </li> */}
                        </ul>
                        <div className="bottomOptionsOfHeader pb-5 mb-3">
                            <div className="pt-4 d-flex justify-content-center gap-5 align-items-center">
                                <div className="d-flex align-items-center text-danger " style={{ fontSize: '12px' }}>
                                    <div>
                                        <img src="/assets/images/icons/Group 28210.svg" alt="" className="w-75" />
                                    </div>
                                    <Link href="mailto:" ><span className="text-danger ">info@samaro.in</span></Link>
                                </div>
                                <div className="d-flex align-items-center " style={{ fontSize: '12px' }}>
                                    <div>
                                        <img src="/assets/images/icons/Group 28211.svg" alt="" className="w-75" />
                                    </div>
                                    <div>
                                        <span className="text-danger">+918655984340</span>
                                    </div>
                                </div>
                            </div>


                            <div className="align-items-center d-flex flex-column justify-content-center flex-wrap gap-2 mt-4">
                                <div className="logo text-center">
                                    <Link href="#">
                                        <span className='text-danger' style={{fontSize:'12px'}}>SAMARO ON</span>
                                    </Link>
                                </div>
                                <div className="social-media-inner-home d-flex gap-3" >
                                    <div className="facebook" >
                                        <Link href="#">
                                            <img className="img p-1" src="/assets/images/social-media/Group 28057.svg" alt="err" />
                                        </Link>
                                    </div>
                                    <div className="x">
                                        <Link href="#">
                                            <img className="img " src="/assets/images/social-media/Path 98762.svg" alt="" />
                                        </Link>
                                    </div>

                                    <div className="youtube">
                                        <Link href="">
                                            <img className="img" src="/assets/images/social-media/Group 28059.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="insta">
                                        <Link href="">
                                            <img className="img" src="/assets/images/icons/Group 28058.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="in">
                                        <Link href="">
                                            <img className="img" src="/assets/images/social-media/Group 28615.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;