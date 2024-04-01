"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Barlow, Fascinate_Inline } from "next/font/google";
import { Input } from "@nextui-org/react";
import { ChevronRight, ChevronLeft, MoveRight } from "lucide-react";
import { variantParent, variant } from "@/animations/staggerChildren";
import axios from "axios";
import toast from "react-hot-toast";
import ButtonSpinner from "@/animations/trackingbutton";
import LocatingSpinner from "@/animations/locating";
import Lottie from "lottie-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import useShipment from "@/hooks/useShipment";

const Carousel = ({ images, content }) => {
  // const { isLoading } = useShipment();
  const queryClient = useQueryClient();
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const paginate = (newIndex) => {
    setIndex(newIndex);
  };

  const [trackingNumber, setTrackingNumber] = useState(null);
  const { mutate, isPending, data, error } = useMutation({
    mutationFn: (trackingNumber) => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/shipment/?tracking_number=${trackingNumber}`
      );
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(
        "Invalid Tracking Number. Please check the number and try again",
        { id: "tracking", duration: 5000 }
      );
    },
    onSuccess: (data) => {
      setCookie("tracking_number", trackingNumber);
      router.push(`/shipment/tracking/?tracking_number=${trackingNumber}`);
      toast.success("Shipment Located!", { id: "tracking", duration: 1500, className: 'text-xs font-semibold' });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(trackingNumber);
    toast.custom(
      <div className="w-24 h-24">
        <Lottie animationData={LocatingSpinner} />
      </div>,
      { id: "tracking", duration: 30000 }
    );
  };

 

  return (
    <div className="relative lg:h-[80vh] h-screen overflow-hidden ">
      {/* BUTTON */}
      <button
        className="absolute p-2 z-50 left-0 top-[12rem]  appearance-none outline-none flex "
        onClick={() => paginate((index - 1 + images.length) % images.length)}
      >
        <ChevronLeft className="h-10 w-10 md:h-14 md:w-14 text-white stroke-[.8px]" />
      </button>
      <button
        className="absolute p-2 z-50 right-0 top-[12rem] appearance-none outline-none flex "
        onClick={() => paginate((index + 1) % images.length)}
      >
        <ChevronRight className="h-10 w-10 md:h-14 md:w-14 text-primary stroke-[.8px]" />
      </button>

      {/* dots */}
      <div className="absolute items-center z-50 bottom-0 left-0 right-0 flex justify-center gap-1 mb-4">
        {images.map((_, i) => (
          <motion.button
            layout="size"
            key={i}
            onClick={() => paginate(i)}
            className={`   relative h-[6px]  rounded-full  bg-white ${
              i === index ? "w-[5rem]" : "bg-white w-3"
            }  `}
          >
            {i === index ? (
              <motion.div
                layoutId="absolute h-full w-full rounded-full top-0 left bg-primary"
                className=" absolute h-full w-full top-0 left-0 rounded-full bg-primary"
              ></motion.div>
            ) : null}
          </motion.button>
        ))}
      </div>

      <AnimatePresence initial={false} mode="wait">
        {images.map((image, i) => {
          if (i === index) {
            return (
              <motion.div
                style={{
                  backgroundImage: `linear-gradient(rgba(10,27,43,.47), rgba(10,27,43,.98) 70%, #0a1b2b), url(${image})`,
                }}
                key={i}
                initial={{ scale: 1.3 }}
                animate={{
                  opacity: [0, 1],
                  scale: [1.3, 1],
                }}
                transition={{
                  duration: 0.27,
                  type: "spring",
                  scale: { duration: 30, delay: 0.8 },
                  opacity: { duration: 1.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.75,
                  },
                }}
                className=" w-full  absolute top-0 h-full object-cover object-center bg-cover bg-no-repeat bg-center "
              />
            );
          }
          return null;
        })}
      </AnimatePresence>

      {/* content */}
      <div className="relative z-40 text-center sm:text-start  container gap-4 mt-[6rem] sm:mt-[9rem] justify-between  flex flex-col sm:flex-row ">
        <div className="space-y-8 sm:space-y-0">
          {content.map((item, i) => {
            if (i === index) {
              return (
                <motion.div
                  className="text-start"
                  key={i}
                  initial="hidden"
                  animate="visible"
                  variants={variantParent}
                >
                  <motion.h1
                    variants={variant}
                    className={`text-primary uppercase text-center sm:text-left mb-10  text-sm tracking-[2px]`}
                  >
                    logistics&nbsp;simplified
                  </motion.h1>
                  <motion.h2
                    className={`text-[clamp(2.125rem,5vw,5rem)] max-w-[20ch] text-center sm:text-start font-[600] text-white mb-4 leading-[1.05] `}
                    variants={variant}
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    className="text-md text-center sm:text-start max-w-[50ch] text-white"
                    variants={variant}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              );
            }
            return null;
          })}
        </div>

        <motion.div
          layout="position"
          className="text-white space-y-4  mt-6 sm:mt-0   text-start px-4 sm:px-10 bg-[#cccccc2f] rounded-xl"
        >
          {/* tracking number input  */}
          <div className="w-full h-full flex flex-col justify-center py-4 sm:py-0">
            <form
              onSubmit={handleSubmit}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex items-center mb-5 "
            >
              <input
                type="text"
                className="p-2 rounded-l-lg rounded-r-none bg-white transition-colors ease-soft-spring duration-500 outline-none text-black focus:bg-black focus:text-white   w-full  "
                placeholder="Tracking Number"
              />
              <button
                type="submit"
                className="bg-primary flex flex-row items-center p-2 rounded-r-lg font-semibold text-secondary"
              >
                {isPending ? (
                  <div className="w-16 h-4 flex items-center p-2 ">
                    <Lottie animationData={ButtonSpinner} />
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    Track <MoveRight strokeWidth={"1px"} />
                  </span>
                )}
              </button>
            </form>
            {/* additional content */}
            <div className="max-w-[30ch] mx-auto text-gray-400">
              <p>
                Not sure where your package is? Enter your tracking number above
                to find out!
              </p>
              <p>
                If you have any questions, please{" "}
                <a
                  href="mailto:support@cargofex.com"
                  className="text-primary underline"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
