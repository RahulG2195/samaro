import React from "react";
import "./Design.css";
import Link from "next/link";

const Design = () => {
    return (
        <section className="why-samaro-design mt-5">
            <div className="container-fluid px-lg-5 ">
                <h2 className="ps-5 text-navy">Design Range in SPC & LVT</h2>
                <div className="row g-0">
                    <div className="col-lg-4">
                        <Link href='/'>
                            <div className="img">
                                <img src="/assets/images/why-samaro/design/1.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link href='/'>
                            <div className="img">
                                <img src="/assets/images/why-samaro/design/2.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link href='/'>
                            <div className="img">
                                <img src="/assets/images/why-samaro/design/3.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Design;
