"use client"
import React, { useState } from "react";
import { Radio, Timeline } from "antd";
import moment from "moment";
const TrackingTimeline = ({shipment}) => {
  //tracking log in decent order
  const tracking_logs = shipment?.tracking_log || [];
  const trackingLogCopy = [...tracking_logs]?.reverse();

  const timelineChild = ({ status, statusText, message, date }) => {
    return (
      <div className="flex flex-col w-full rounded-md space-y-2">
        <h1 className="text-xs text-bold text-[#ccc]">{statusText}</h1>
        <p className="text-gray-600 sm:text-[12.5px] capitalize font-semibold text-[11.5px] whitespace-break-spaces">{message}</p>
        <span className="text-xs text-gray-400 ">
          {moment(date).format("hh:mm A")}
        </span>
      </div>
    );
  };
  const dotColor = (currentStatus) => {
    switch (currentStatus) {
      case "preparing":
        return "bg-blue-400";
      case "in_transit":
        return "bg-teal-400";
      case "delivered":
        return "bg-green-400";
      case "returned":
        return "bg-red-500";
      case "delayed":
        return "bg-yellow-300";
      case "on_hold":
        return "bg-red-300";

      default:
        return "bg-teal-800";
    }
  };  
  const getLabelColor = (currentStatus) => {
    switch (currentStatus) {
      case "preparing":
        return "text-blue-300";
      case "in_transit":
        return "text-teal-400";
      case "delivered":
        return "text-green-400";
      case "returned":
        return "text-red-400";
      case "delayed":
        return "text-yellow-400";
      case "on_hold":
        return "text-red-300";

      default:
        return "text-teal-800";
    }
  };

  const getLabel = (date, status) => {
    return (
      <div className={`flex flex-col items-center justify-center text-sm `}>
        <span className={`flex flex-col text-gray-500 `}>{
          moment(date).format("DD")
        
        }</span>
        <span className='text-gray-400 uppercase'>{
          moment(date).format('ddd')
        
        }</span>
      </div>
    );
  };

  const pingDot = (status) => {
    return (
      <div className="relative flex items-center justify-center">
        <div className={`h-[11px] w-[11px] ${dotColor(status)} rounded-full animate-ping absolute`}></div>
        <div
          className={`h-3 w-3 ${dotColor(status)} rounded-full absolute`}
        ></div>
      </div>
    );
  };
  const timelineItems = trackingLogCopy?.map((log, index) => {
    return {
      label: getLabel(log.created_at, log.status),
      children: timelineChild({
        status: log.status,
        statusText: log.statusText,
        message: log.message,
        date: log.created_at,
      }),
      dot: pingDot(log.status),
 
    };
  })

  return (
    <Timeline
      mode={"left"}
      pending={true}
      items={timelineItems}
    />
  );
};
export default TrackingTimeline;
