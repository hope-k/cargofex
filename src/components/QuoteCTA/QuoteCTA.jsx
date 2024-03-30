import React from "react";
import Link from "next/link";
import Image from "next/image";

const QuoteCTA = () => {
  return (
    <div className="bg-white">
      <div className="container bg-primary rounded-sm py-[105px] px-[55px] top-[-78px] relative z-10 ">
        <div className="w-full space-y-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-[clamp(2rem,2.625vw,2.625rem)] font-[600] leading-10 ">
            Experience a smarter way to move
            <br /> your shipments.
          </h1>
          <p>
            Get a quote today and see how we can help you save time and money.
          </p>
          <Link
            href="https://www.ups.com/us/en/Home.page#tabs_0_tabPane_1"
            className="text-white bg-midnight  py-3 px-6 rounded-full"
          >
            Get a Quote
          </Link>
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
          className="absolute max-w-[60%]  right-0 bottom-0  z-50  "
          src={"/services/pattern.svg"}
          alt="pattern"
          width={200}
          height={200}
        />{" "}
      </div>
    </div>
  );
};

export default QuoteCTA;
