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
                                <NavLink href="/product">Product</NavLink>
                                <ul className="text-center prdctDrop position-absolute">
                                    <li><Link href="/spcProducts"><p className="darkBlue">SPC</p></Link></li>
                                    <li><Link href="/lvtProducts"><p className="darkBlue">LVT</p></Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink href="inspiration">
                                    Inspiration
                                </NavLink>
                            </li>
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
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" href="career">
                                    Career
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
