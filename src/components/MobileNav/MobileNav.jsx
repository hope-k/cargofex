"use client";
import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useSidebar } from "@/hooks/useSidebar";

const MobileNav = () => {
  const { toggleSidebar, isOpen  } = useSidebar();

  return (
    <div className="block md:hidden py-2">
      <Hamburger toggle={toggleSidebar} toggled={isOpen} rounded direction="right" size={28} />
    </div>
  );
};

export default MobileNav;
