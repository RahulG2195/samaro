"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "@/components/Home/Topbar/Topbar";
import { useEffect } from "react";
import "./globals.css";
import Header from "@/components/Home/Header/Header";
import Banner from "@/components/Home/Banner/Banner";
import Design from "@/components/Home/Design/Design";
import Spclvt from "@/components/Home/SPCLVT/Spclvt";
import Benefits from "@/components/Home/Benefits/Benefits";
import Footer from "@/components/Home/Footer/Footer";
import Social from "@/components/Home/Social/Social";
import Commercial from "@/components/Home/Commercial/Commercial";
import Residentail from "@/components/Home/Residential/Residentail";
import CallToAction from "@/components/Home/CallToAction/CallToAction";
import FloorExplorer from "@/components/Home/FloorExplorer/FloorExplorer";


export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main>
      <Topbar></Topbar>
      <Header></Header>
      <Banner></Banner>
      <Spclvt></Spclvt>
      <Design></Design>
      <Benefits></Benefits>
      <FloorExplorer></FloorExplorer>
      <Commercial></Commercial>
      <Residentail></Residentail>
      <CallToAction></CallToAction>
      <Social></Social>
      <Footer></Footer>
    </main>
  );
}
