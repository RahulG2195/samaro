import React from "react";
import "./Header.css";
import Link from "next/link";
import NavLink from "@/components/helpers/NavLink/NavLink";
const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <img src="/assets/images/logo/main-logo.png" alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item">
                                <NavLink href="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="/why-samaro">Why Samaro</NavLink>
                            </li>
                            <li className="nav-item position-relative prdcts">
                                <NavLink className="prdctHeading" href="/product">Product</NavLink>
                                {/* <ul className=" prdctDrop drop1 px-5 position-absolute">
                                    <li><Link href="/spcProducts"><p className="darkBlue">SPC</p></Link></li>
                                    <li><Link href="/lvtProducts"><p className="darkBlue">LVT</p></Link></li>
                                </ul>
                                <ul className="mobileoptions">
                                    <li><Link href="/spcProducts">SPC</Link></li>
                                    <li><Link href="/lvtProducts">LVT</Link></li>
                                </ul> */}
                            </li>
                            <li className="nav-item position-relative prdcts">
                                <div className="inspi">
                                    <NavLink href="/gallery" className="lnk"> Inspiration</NavLink>
                                </div>
                                <ul className=" prdctDrop px-4 position-absolute">
                                    <li><Link href="/gallery"><p className="darkBlue">Gallery</p></Link></li>
                                    <li><Link href="/FindYourMatch"><p className="darkBlue">Find your ideal floor</p></Link></li>
                                    <li><Link href="/downloadCenter"><p className="darkBlue">Download center</p></Link></li>
                                </ul>

                            </li>
                            <span className="mobileoptions" >
                              
                                <li className="nav-ite"><NavLink className="nav-link" href="/gallery">Gallery</NavLink></li>
                                <li className="nav-ite"><NavLink className="nav-link" href="/FindYourMatch">Find your ideal floor</NavLink></li>
                                <li className="nav-ite"><NavLink className="nav-link" href="/downloadCenter">Download center</NavLink></li>
                            </span>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/newsletter">
                                    Newsletter
                                </NavLink>
                            </li>
                            <li className="nav-item">
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
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
