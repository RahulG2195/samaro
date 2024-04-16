import React from "react";
import "./Banner.css";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row g-4 pt-4">
                    <div className="col-lg-7 textcont">
                        <h2 className="heading">
                            Premium vinyl, <span className="spn"><Link href='/spcProducts'>SPC,</Link>  & <Link href='/spcProducts'>LVT</Link></span> flooring of
                            &nbsp;
                            <span>superior quality.</span>
                        </h2>
                        <Link href="/product" className="button d-inline-block px-3 py-0">
                            Discover all our floors
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
