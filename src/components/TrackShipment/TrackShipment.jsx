"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveRight, ChevronLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import ButtonSpinner from "@/animations/trackingbutton";
import LocatingSpinner from "@/animations/locating";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const TrackShipment = () => {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState(null);
  const { mutate, isPending, data, error } = useMutation({
    mutationFn: (trackingNumber) => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/shipment/?tracking_number=${trackingNumber}`
      );
    },
    onError: (error) => {
      toast.error(
        "Invalid Tracking Number. Please check the number and try again",
        { id: "tracking", duration: 5000 }
      );
    },
    onSuccess: (data) => {
      setCookie("tracking_number", trackingNumber);
      router.push(`/shipment/tracking/?tracking_number=${trackingNumber}`);
      toast.success("Shipment Located!", { id: "tracking", duration: 3000 });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(trackingNumber);
    toast.custom(
      <div className="w-24 h-24">
        <Lottie animationData={LocatingSpinner} />
      </div>,
      { id: "tracking", duration: 10000 }
    );
  };

  return (
    <div className="bg-midnight">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(10,27,43,.47), rgba(10,27,43,.98) 70%, #0a1b2b), url("/map.jpg")`,
          backgroundPosition: "center center",
        }}
        className=" w-full  absolute top-0 h-[120vh] object-cover object-center bg-cover bg-no-repeat bg-center "
      />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0 }}
        className="h-screen w-full flex items-center justify-center z-50  relative"
      >
        <div className="text-white space-y-4  mt-6 sm:mt-0   text-start px-4 sm:px-10 bg-white py-6 rounded-xl">
          {/* tracking number input  */}
          <div className="w-full h-full flex flex-col justify-center relative py-4 sm:py-0">
            <form onSubmit={handleSubmit} className="flex items-center mb-5 ">
              <input
                onChange={(e) => setTrackingNumber(e.target.value)}
                type="text"
                className="p-2 rounded-l-lg rounded-r-none bg-white transition-colors ease-soft-spring duration-500 outline-none border-y border-l border-gray-100 text-black focus:bg-black focus:text-white   w-full  "
                placeholder="Tracking Number"
              />
              <button
                type="submit"
                className="bg-midnight flex flex-row items-center p-2 rounded-r-lg font-normal text-primary"
              >
                {isPending ? (
                  <div className="w-16 h-4 flex items-center p-2">
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
            <div className="max-w-[30ch] mx-auto text-gray-500">
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
        </div>
      </motion.div>
    </div>
  );
};

export default TrackShipment;
