import React from "react";
import { features } from "./features";
import Image from "next/image";
import Link from 'next/link'

const CoreFeatures = () => {
  return (
    <div className="bg-midnight py-28">
      <div className="container">
        <div className="space-y-4">
          <h2 className="text-primary font-[500] text-sm uppercase tracking-[2px]">
            why choose CargoFex?
          </h2>
          <h1 className="text-[clamp(2rem,2.625vw,2.625rem)] capitalize font-[600] leading-[1.1]">
            core features
          </h1>
          <h3 className="text-gray-500 text-lg leading-6 ">
           
            We offer a wide range of features <br /> to make shipping easier and
            more efficient.
          </h3>
        </div>
        {/* features */}
        <div className="flex flex-wrap    lg:flex-row flex-col mt-20">
          {features.map((feature, i) => (
            <div key={i} className="lg:w-[33%] w-full h-full mb-16">
              <div className="w-full  space-y-5 pr-8 h-full ">
                <div className="flex  space-x-2 items-center flex-row">
                  <span>
                    <Image
                      width={35}
                      height={35}
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </span>
                  &nbsp;
                  <h1 className="text-[clamp(1.125rem,1.6vw,1.625rem)] font-[600]">
                    {feature.title}
                  </h1>
                </div>
                <p className="text-base font-[500] tracking-normal text-gray-400">{feature.description}</p>
                <Link href='https://www.transglobeacademy.com/the-features-of-logistics-management/' className="text-primary font-[600] text-sm uppercase tracking-wider">
                    read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
