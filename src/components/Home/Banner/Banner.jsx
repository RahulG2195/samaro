import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row g-4 pt-4">
                    <div className="col-lg-7 mx-auto">
                        <h2 className="heading">
                            Premium vinyl, <span>SPC, & LVT</span> flooring of
                            &nbsp;
                            <span>superior<br /> quality.</span>
                        </h2>
                        <a href="#" className="button d-inline-block mt-3">
                            Discover all our floors
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
