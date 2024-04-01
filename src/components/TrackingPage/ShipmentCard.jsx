"use client";
import React, { useRef, useEffect } from "react";
import { ChevronRight, MoveRight } from "lucide-react";
import { useDisclosure } from "@nextui-org/react";
import ShipmentDetails from "./ShipmentDetails";
import moment from "moment";
import Lottie from "lottie-react";
import move from "@/animations/move";
import { NumericFormat } from 'react-number-format';


const ShipmentCard = ({ shipment }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const currentStatusColor = (currentStatus) => {
    switch (currentStatus) {
      case "preparing":
        return "text-blue-300";
      case "in_transit":
        return "text-primary";
      case "delivered":
        return "text-green-400";
      case "returned":
        return "text-red-400";
      case "delayed":
        return "text-yellow-400";
      case "on_hold":
        return "text-yellow-300";

      default:
        return "text-white";
    }
  };
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.setSpeed(0.15);
  }, []);
  const currentStatus = shipment?.tracking_log[0]?.status;
  const currentStatusText = shipment?.tracking_log[0]?.statusText;
  return (
    <div className="bg-midnight sm:space-y-2  text-white rounded-3xl w-full px-2 sm:px-[1rem] py-3">
      <div className="flex gap-[3rem] pb-3 ">
        <div>
          <h1 className="text-sm font-semibold">Tracking Number</h1>
          <span>{shipment?.tracking_number}</span>
        </div>{" "}
        <div>
          <h1 className="text-sm font-semibold">Current Status</h1>
          <span className={`${currentStatusColor(currentStatus)}`}>
            {currentStatusText}
          </span>
        </div>
      </div>
      <div className="flex gap-[1.5rem] pb-3">
        <div>
          <h1 className="text-sm font-semibold">Departure</h1>
          <span className="text-[14px]">
            {moment(shipment?.departure).format("lll")}
          </span>
        </div>
        <span className="flex flex-row items-center h-full">
          <span className="w-12 h-10">
            <Lottie lottieRef={ref} animationData={move} />
          </span>{" "}
        </span>
        <div>
          <h1 className="text-sm font-semibold">Est Arrival</h1>
          <span className="text-[14px]">
            {moment(shipment?.est_arrival).format("lll")}
          </span>
        </div>
      </div>{" "}
      <div className="flex gap-[3rem] border-b border-gray-300/40 pb-[8px]">
        <div>
          <h1 className="text-sm font-semibold">Owner</h1>
          <span>
            {shipment?.manager?.additional_info?.full_name}
          </span>
        </div>{" "}
        <div>
          <h1 className="text-sm font-semibold">Weight</h1>
          <span>{shipment?.total_weight}kg</span>
        </div>
        <div>
          <h1 className="text-sm font-semibold">Total Est(Tax Incl.)</h1>
          <span>
            <NumericFormat value={shipment?.total_est} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </span>
        </div>
      </div>
      <div className="flex gap-[3rem] pt-1">
        <div className="flex justify-between items-center w-full flex-row  space-x-2 font-semibold text-xs uppercase">
          <h1 className="bg-gradient-to-r opacity-90 from-gray-900 via-gray-600 to-gray-900 p-2 rounded-xl ">
            <span className="text-[10px]">
              Carrier {shipment?.tracking_log[0]?.logistics_company?.name}
            </span>{" "}
          </h1>

          <button
            onClick={onOpen}
            className="flex space-x-2 bg-white text-xs cursor-pointer rounded-xl text-black pl-2 pr-6 py-[3px]  hover:pr-10 transition-all duration-300 ease-in-out items-center justify-center capitalize"
          >
            <span>view details</span>
            <MoveRight className="stroke-[1px] text-black relative " />
            <ShipmentDetails
              status={currentStatus}
              statusText={currentStatusText}
              shipment={shipment}
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            />
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default ShipmentCard;
