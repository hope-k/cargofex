"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import Link from "next/link";
import CookieMessage from "../CookieMessage/CookieMessage";

const Hero = () => {
  const carouselContent = [
    {
      title: "Global Shipping The Way it Should Be.",
      description:
        "Revolutionizing the way you ship with our cutting-edge air flight logistics solutions. Experience unparalleled speed and efficiency in your shipments across the globe.",
      image: "/hero/air.jpg",
    },
    {
      title: "Efficient Land Transport Solutions for Your Needs",
      description: "",
      description:
        "Offering comprehensive land transport solutions tailored to meet your logistical needs. From full truckloads to less-than-truckload services, we ensure your cargo reaches its destination efficiently.",
      image: "/hero/land.jpg",
    },
    {
      title: "Seamless Sea Freight Logistics Services",
      description:
        "Our sea freight logistics solutions are designed to provide you with the flexibility and reliability you need for your ocean shipments. We offer a range of services to meet your specific requirements.",
      image: "/services/ocean.jpg",
    },
  ];
  const bgImages = carouselContent.map((content) => content.image);

  return (
    <section className="lg:h-[80vh] h-screen relative ">
      <div className="relative w-full h-full ">
      <CookieMessage />
        <Carousel content={carouselContent} images={bgImages} />
      </div>
    </section>
  );
};

export default Hero;
