"use client";

import { useEffect } from "react";

import Banner from "@/components/Home/Banner/Banner";
import Design from "@/components/Home/Design/Design";
import Spclvt from "@/components/Home/SPCLVT/Spclvt";
import Benefits from "@/components/Home/Benefits/Benefits";
import Social from "@/components/Home/Social/Social";
import Commercial from "@/components/Home/Commercial/Commercial";
import Residentail from "@/components/Home/Residential/Residentail";
import CallToAction from "@/components/Home/CallToAction/CallToAction";
import FloorExplorer from "@/components/Home/FloorExplorer/FloorExplorer";
import FollowMore from "@/components/Home/FollowMore/FollowMore";
import SpcForm from "@/components/SpcProducts/SpcForm";

export default function Home() {
  return (
    <main>
      <Banner />
      <Spclvt />
      <Design />
      <Benefits />
      <FloorExplorer />
      <Commercial />
      <Residentail />
      
      <div className="pt-lg-0 pt-5">
        <SpcForm></SpcForm>
      </div>
      {/* <CallToAction /> */}
      <div className="pt-lg-0 pt-md-0 py-5 ">
        <Social />
      </div>
      <FollowMore />
    </main>
  );
}
