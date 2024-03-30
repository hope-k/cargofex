"use client";
import React from "react";
import Hero from "../Hero/Hero";
import FeaturedVideo from "../FeaturedVideo/FeaturedVideo";
import OurServices from "../OurServices/OurServices";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import QuoteCTA from "../QuoteCTA/QuoteCTA";
import Partners from "../Partners/Partners";
import Banner from "../Banner/Banner";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSidebar } from "@/hooks/useSidebar";
import CookieMessage from "../CookieMessage/CookieMessage";
import { Barlow } from "next/font/google";

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
});

const Layout = () => {
  const { setIsOpen } = useSidebar();
  return (
    <div className={`bg-midnight relative ${barlowFont.className}`}>

        <Header />
      <div onClick={() => setIsOpen(false)}>
        <Hero />
        <FeaturedVideo />
        <OurServices />
        <CoreFeatures />
        <QuoteCTA />
        <Partners />
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
