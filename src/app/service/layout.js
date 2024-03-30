"use client";
import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useSidebar } from "@/hooks/useSidebar";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ServiceLayout({ children }) {
  const pathname = usePathname();
  const getImage = () => {
    if (pathname === "/service/air-transport") {
      return "/services/air.jpg";
    }
    if (pathname === "/service/ground-transport") {
      return "/hero/land.jpg";
    }
    if (pathname === "/service/sea-transport") {
      return "/services/sea.jpg";
    }
  };

  const { setIsOpen } = useSidebar();

  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(10,27,43,.47), rgba(10,27,43,.98) 70%, #0a1b2b), url(${getImage()})`,
          backgroundPosition: "center center",
        }}
        className=" w-full  absolute top-0 h-full object-cover object-center bg-cover bg-no-repeat bg-center "
      ></div>
      <div onClick={() => setIsOpen(false)} className=" relative z-20 ">
        {children}
      </div>
      <Footer />
    </>
  );
}
