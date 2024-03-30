"use client";
import React, { useState, useEffect } from "react";
import ShipmentCard from "./ShipmentCard";
import { ChevronRight, History, Bell, MapPinned } from "lucide-react";
import Image from "next/image";
import TrackingMap from "./TrackingMap";
import TrackingTimeline from "./TrackingTimeline";
import useShipment from "@/hooks/useShipment";
import { Badge } from "@nextui-org/react";
import Notification from "./Notification";
import TrackingHistory from "./TrackingHistory";

const TrackingPage = () => {
  const { data: shipment } = useShipment();

  return (
    <div className="h-screen w-full">
      <div className="sm:max-w-[90vw] max-w-[95vw]  mx-auto mt-[3rem]">
        {/* Header */}
        <header className="bg-midnight w-full text-white  rounded-full py-2 mb-16 ">
          <div className="flex pl-6 pr-1 justify-between items-center ">
            <div className="text-xs font-semibold capitalize space-x-3 flex items-center">
              <MapPinned />{" "}
              <span className="bg-red-500 h-2 w-2 rounded-full animate-bounce"></span>
              <h1>
                Live Tracking
                <span className="hidden sm:inline-block ml-1">
                  #{shipment?.tracking_number}
                </span>{" "}
              </h1>
            </div>
            <div className="flex space-x-4 pr-4 items-center">
              <TrackingHistory history={shipment?.tracking_log} />
              <Notification notifications={shipment?.notifications} />
            </div>
          </div>
        </header>

        <div className=" flex items-center sm:items-start sm:justify-between w-full flex-col  sm:flex-row gap-6 ">
          {/* card */}
          <div className="relative flex flex-col justify-center items-center w-[98vw] sm:max-w-[30%] ">
            <div className=" shadow-lg  absolute top-0 z-[-1] left-0  p-[2px] rounded-3xl right-0 bottom-0 "></div>
            <ShipmentCard shipment={shipment} />
            <div className="mt-6 left-[-4rem] relative">
              <TrackingTimeline shipment={shipment} />
            </div>
          </div>

          {/* map */}
          <div className="h-[65vh] w-full sm:w-[70%] ">
            <TrackingMap shipment={shipment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
