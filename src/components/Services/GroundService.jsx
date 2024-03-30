"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoveRight } from "lucide-react";
import { variant, variantParent } from "@/animations/staggerChildren";
import { motion } from "framer-motion";

const GroundService = () => {
  const pathname = usePathname();
  const navLinks = pathname.split("/");
  return (
    <div className="relative w-full ">
      <div className=" relative top-[7rem] ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantParent}
          className="space-y-6 container mb-28"
        >
          <motion.h2
            variants={variant}
            className="text-primary font-[500] text-sm uppercase tracking-[2px]"
          >
            Ground Transport
          </motion.h2>
          <motion.h1
            variants={variant}
            className="text-[clamp(2.125rem,4.625vw,4.625rem)] font-[600] leading-[1.05]"
          >
            Move your product
            <br /> between states.{" "}
          </motion.h1>
          <motion.h3 variants={variant} className="text-gray-300 text-lg">
            Our Road Freight service guarantees safe, efficient transport of<br/>
            your goods across the country. Utilizing a fleet of modern vehicles,<br/>
            we handle all types of cargo. We offer flexible scheduling,<br/>
            real-time tracking, and competitive pricing to meet your unique<br/>
            needs.
          </motion.h3>
          <motion.div variants={variant} className="">
            <Link
              className="border-white border py-3 px-6 rounded-full "
              href="https://www.ups.com/us/en/Home.page#tabs_0_tabPane_1"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>
        {/* breadcrump */}
        <div className="w-full pb-[10rem] bg-midnight">
          <div className="sm:w-[65%] w-[90%] bg-primary rounded-r-full">
            <div className="flex justify-end w-full space-x-3 sm:space-x-4 sm:py-10 py-6  pr-10">
              <Link className="text-gray-800/40" href="/">
                Home
              </Link>
              <MoveRight className="text-gray-800/40" />

              <Link className="text-gray-800/30" href={navLinks[2]}>
                Service
              </Link>
              <MoveRight className="text-gray-800/40" />

              <Link className="text-gray-800" href={navLinks}>
                Ground Transport
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundService;
