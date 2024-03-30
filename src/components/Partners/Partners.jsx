import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const partners = [
    "/partners/google.svg",
    "/partners/shopify.svg",
    "/partners/deposco.svg",
    "/partners/parcel.svg",
    "/partners/salesforce.svg",
    "/partners/easypost.svg",
    "/partners/ups.svg",
];
  return (
    <div className=" w-full bg-white pb-20 flex flex-col items-center ">
      <h1
        className={`mb-10 text-midnight uppercase text-[clamp(1.2rem,1.6vw,1.625rem)] font-[600] relative`}
      >
        Partners
      </h1>

      <div className="  flex items-center lg:max-w-[40vw] w-full flex-wrap gap-5 justify-center  ">
        {partners.map((partner, i) => (
          <Image
            key={i}
            src={partner}
            alt={"partner" + i}
            priority={true}
            width={100}
            height={100}
            className=" text-white"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
