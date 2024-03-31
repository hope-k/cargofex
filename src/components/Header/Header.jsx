"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "../MobileNav/MobileNav";
import {
  Plane,
  Droplet,
  PackageCheck,
  Globe,
  SquareGanttChart,
  Headset,
} from "lucide-react";
import Dropdown from "../Dropdown/Dropdown";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
      children: [
        {
          name: "Air Freight",
          link: "/service/air-transport",
          icon: <Plane />,
        },
        {
          name: "Ocean Freight",
          link: "/service/sea-transport",
          icon: <Droplet />,
        },
        {
          name: "Road Freight",
          link: "/service/ground-transport",
          icon: <PackageCheck />,
        },
      ],
    },
    {
      name: "Tracking",
      link: "/track-shipment",
      children: [
        {
          name: "Track Your Shipment",
          link: "/track-shipment",
          icon: <Globe />,
        },
        {
          name: "view all shipments",
          link: "/view-shipment",
          icon: <SquareGanttChart />,
        },
        {
          name: "tracking support",
          link: "mailto:support@cargofex.com",
          icon: <Headset />,
        },
      ],
    },
    {
      name: "Account",
      link: "/account/signin",
      children: [
        {
          name: "Create Account",
          link: "/auth/signup",
        },
        {
          name: "Sign In",
          link: "https://www.ups.com/lasso/login",
        }
      ]

    },
    {
      name: "Company",
      link: "/company",
    },
    {
      name:(<span className="bg-primary py-1 px-4 text-gray-800  rounded-full">Contact Us</span>) ,
      link: "mailto:support@cargofex.com",
    },
    
  ];
  return (
    <div className="w-full relative z-[100]">
      {/* NEWS */}
      <div
        className={`${
          isHome ? "flex" : "hidden"
        } bg-primary min-h-[60px] text-sm text-white  items-center justify-center space-x-2`}
      >
        <Link
          href="https://www.wsj.com/news/logistics-report"
          className="bg-[#eea800] p-2 rounded-3xl text-xs"
        >
          News
        </Link>
        <h1 className="text-xs font-semibold">
          Get the latest news & resources with CargoFex
        </h1>
      </div>
      <div className="container absolute z-50 left-0 right-0   border-b border-[#cccccc51]">
        {/*Logo and Navigation Links */}
        <div className="flex items-center justify-between w-full">
          <Link href='/'>
          
            <Image
              src="/logo.png"
              alt="logo"
              priority
              width={200}
              height={100}
            />
          </Link>

          <MobileNav />
          <div className="hidden  md:flex items-center   ">
            {navLinks.map((link) => {
              return <Dropdown key={link.name} link={link} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
