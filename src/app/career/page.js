"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "@/components/Home/Topbar/Topbar";
import { useEffect } from "react";
import Header from "@/components/Home/Header/Header";
import Footer from "@/components/Home/Footer/Footer";
import About from "@/components/Why-Samaro/About/About";


export default function Home() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <main>
            <Topbar></Topbar>
            <Header></Header>
            <About></About>
            <Footer></Footer>
        </main>
    );
}
