import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Banner/Banner";

const Footer = () => {
  return (
    <>
      <Banner />
      <div className="bg-midnight md:h-[50vh] h-[90vh]">
        <div className="container flex-col  md:pt-[5rem] md:flex-row gap-10 justify-center flex md:justify-between h-full md:items-center text-gray-400  ">
          <div className="flex flex-col space-y-6 ">
            <Image src="/logo.png" alt="logo" width={250} height={250} />
            <div>
              UPS Australia P/L - Sydney Port
              <br /> Air Industrial Estate Unit 3a,
              <br /> 1a Hale St Botany NSW 2019, Australia
            </div>
            <div>
              <h1>support@cargofex.com</h1>
            </div>
          </div>
          {/* second column */}
          <div className="flex flex-col gap-8 md:flex-row md:space-x-[10rem]">
            <div className="flex flex-col space-y-4 ">
              <h1 className="font-semibold">Services</h1>
              <div className="flex flex-col space-y-2">
                <Link href="/service/air-transport">Air Freight</Link>
                <Link href="/service/sea-transport">Ocean Freight</Link>
                <Link href="/service/ground-transport">Road Freight</Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 ">
              <h1 className="font-semibold">Company</h1>
              <div className="flex flex-col space-y-2">
                <Link href="/company">About Us</Link>
                <Link href="https://www.theupsstore.com/small-business-services/small-business-blog">
                  Blog
                </Link>
                <Link href="/services">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-midnight text-gray-500 pb-[5rem]">
          <div className="text-sm container  ">
            Copyright© 1994-2024 CargoFex. All rights reserved. Powered by{" "}
            <Link href="https://ups.com">UPS</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
