import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const Banner = () => {
  const locations = ["AUD", "NYC", "CHN", "EU"];
  return (
    <div className=" bg-primary  rounded-sm  px-[55px] h-[80vh] relative z-10 ">
      <div className="container h-full items-center flex ">
        <div>
          <h1 className="text-[clamp(2rem,2.625vw,2.625rem)] font-[600] leading-10 mb-6 ">
            Offices across the globe
          </h1>
          <div className="flex flex-wrap    w-full">
            {locations.map((location, i) => (
              <div
                key={i}
                className="flex flex-row  items-center justify-between  font-[600]  text-[clamp(3rem,5vw,5rem)]"
              >
                <h1>{location}</h1>
                {i !== locations.length - 1 && (
                  <span className="mx-[60px]">
                    <MoveRight />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* background lines  */}
      <div className="w-full flex absolute left-0 right-0 top-0 bottom-0 z-50">
        <span className="w-[14%] border-r border-gray-200/35"></span>
        <span className="w-[14%] border-r border-gray-200/35"></span>
        <span className="w-[14%] border-r border-gray-200/35"></span>
        <span className="w-[14%] border-r border-gray-200/35"></span>
        <span className="w-[14%] border-r border-gray-200/35"></span>
        <span className="w-[14%] border-r border-gray-200/35"></span>
      </div>
      <Image
        className="absolute max-w-[60%] rotate-90  left-0 bottom-0  z-50  "
        src={"/services/pattern.svg"}
        alt="pattern"
        width={200}
        height={200}
      />{" "}     
       <Image
        className="absolute max-w-[60%] -rotate-90 right-0 top-0  z-50  "
        src={"/services/pattern.svg"}
        alt="pattern"
        width={200}
        height={200}
      />{" "}
    </div>
  );
};

export default Banner;
