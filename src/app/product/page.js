"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../../components/Home/Topbar/Topbar";
import { useEffect } from "react";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
// import Products from "@/components/Product/products";
import Products from '../../components/Product/Products'
import SpcBanner from "../../components/SpcProducts/SpcBanner";


export default function Home() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <main>
            {/* <Topbar></Topbar> */}
            {/* <Header></Header> */}
            {/* <SpcBanner></SpcBanner> */}
            <Products></Products>
            {/* <Footer></Footer> */}
        </main>
    );
}
