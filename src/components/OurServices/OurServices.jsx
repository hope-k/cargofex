"use client";
import React from "react";
import { services } from "./services";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from 'next/link'
const OurServices = () => {
  return (
    <div className='bg-midnight bg-[url("/our-services.svg")] bg-no-repeat pt-28'>
      <div className="container">
        <div className="space-y-4">
          <h2 className="text-primary font-[500] text-sm uppercase tracking-[2px]">
            our service areas
          </h2>
          <h1 className="text-[clamp(2rem,2.625vw,2.625rem)] font-[600] leading-[1.1]">
            We Are the Leading Experts <br /> in Global Transport
          </h1>
          <h3 className="text-gray-500 text-lg">
            Streamlined Air, Land and Sea Freight Services <br /> for Global
            Delivery and Unmatched Reliability and Efficiency
          </h3>
        </div>
        {/* flex */}
        <div className="flex w-full  gap-6 lg:gap-0  mt-12 flex-col lg:flex-row flex-wrap justify-between">
          {services.map((service, i) => (
            <Link href={service.link} key={i} className="h-full lg:w-[32%] w-full  relative">
              <div className=" relative  w-full overflow-hidden h-[290px]  bg-left">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectPosition="left center"
                  className=" rounded-t-md"
                />
                {i === 0 && (
                  <Image
                    className="absolute max-w-[60%] rounded-b-lg  top-0 left-0  rotate-180 bottom-0   "
                    src={"/services/pattern.svg"}
                    alt={service.name}
                    width={200}
                    height={200}
                  />
                )}{" "}
                {i === 1 && (
                  <Image
                    className="absolute max-w-[60%] rounded-lg  right-0 rotate-[270deg]    "
                    src={"/services/pattern.svg"}
                    alt={service.name}
                    width={200}
                    height={200}
                  />
                )}{" "}
                {i === 2 && (
                  <Image
                    className="absolute max-w-[60%] rounded-lg top-auto left-auto right-0 bottom-0   "
                    src={"/services/pattern.svg"}
                    alt={service.name}
                    width={200}
                    height={200}
                  />
                )}
              </div>
              <div className="bg-white flex flex-col relative px-[2rem] pt-[2rem] pb-[5rem] rounded-b-md space-y-6">
                <h1 className="text-gray-900 text-xl font-[600] ">
                  {service.title}
                </h1>
                <p className="text-gray-500 text-[18px] font-[500] ">
                  {service.description}
                </p>
                <button className="bottom-0 right-0 flex items-center justify-center text-black bg-primary py-2 px-6 rounded-tl-xl rounded-br-md absolute">
                  <MoveRight />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
