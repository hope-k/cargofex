"use client";
import React, { useState } from "react";
import Map, {
  NavigationControl,
  Marker,
  Popup,
  Source,
  Layer,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Lottie from "lottie-react";
import locationPin from "@/animations/location.json";
import useShipment from "@/hooks/useShipment";

const TrackingMap = ({ shipment }) => {
  return (
    <div className="w-full h-full rounded-3xl">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          latitude: shipment?.tracking_log[0]?.location?.latitude,
          longitude: shipment?.tracking_log[0]?.location?.longitude,
          zoom: 10,
        }}
        style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}
        mapStyle={
          "https://api.maptiler.com/maps/streets-v2/style.json?key=RfotlSINVRYWPkoWdEiv"
        }
      >
        {/* navigation control */}
        <NavigationControl showCompass showZoom position="top-right" />

        {/* marker */}
        <Marker
          latitude={shipment?.tracking_log[0]?.location?.latitude}
          longitude={shipment?.tracking_log[0]?.location?.longitude}
          offset={[0, -35]}
        >
          <div className="relative space-y-[-2rem]">
            <div className="w-[12rem]">
              <Lottie animationData={locationPin} loop={true} />
            </div>
            <div className="bg-black text-white pl-2 py-[3px]  rounded-xl border border-white ">
              {`${shipment?.tracking_log[0]?.message}`}
            </div>
          </div>
        </Marker>
      </Map>
    </div>
  );
};

export default TrackingMap;
