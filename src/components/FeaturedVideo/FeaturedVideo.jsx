"use client";
import React from "react";
import Image from "next/image";
import VideoModal from "../VideoModal/VideoModal";
import { useDisclosure } from "@nextui-org/react";
import Link from 'next/link'

const FeaturedVideo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-midnight border-b border-t lg:border-t-0 border-[#cccccc2b] w-full">
      <div className="container flex items-center gap-4 sm:gap-0  flex-col sm:flex-row py-[3rem] lg:py-[4rem]  w-full">
        <div className="flex items-center  space-x-3  w-full">
          <button onClick={onOpen} className="relative ">
            {/* video */}
            <div className=" w-[100px] h-[70px] flex items-center justify-center ">
              <Image
                className="rounded-lg"
                src="/hero/air.jpg"
                alt="featured-video"
                layout="fill"
              />

              {/* play button */}
              <div className="w-6 h-6 absolute z-20">
                <Image
                  src="/playbutton.svg"
                  alt="featured-video"
                  layout="fill"
                />
              </div>
            </div>
          </button>
          <span className="w-[1px] h-6 bg-primary"></span>
          <div className="tracking-[2px] text-sm uppercase">
            <h1 className="text-gray-200">Featured Article</h1>
            <p className="text-[#ccc]">ROUTE REPORTS: SEE HOW WE TRACK</p>
          </div>
        </div>

        <div>
          <Link href={'https://www.shiprocket.in/blog/courier-parcel-package-tracking-system-working/#:~:text=This%20system%20involves%20meticulous%20steps,aiding%20in%20its%20efficient%20tracking.'} className="bg-primary sm:py-4 sm:px-7 py-2 px-4 text-gray-800 sm:rounded-full rounded-xl  capitalize">
            learn&nbsp;more
          </Link>
        </div>
      </div>
      <VideoModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default FeaturedVideo;
