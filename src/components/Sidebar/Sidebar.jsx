"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/hooks/useSidebar";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const pathname = usePathname()
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Track Shipments",
      link: "/track-shipment"

    },
    {
      name: "Air Freight",
      link: "/service/air-transport",
    },
    {
      name: "Ocean Shipping",
      link: "/service/sea-transport",
    },
    {
      name: "Ground transport",
      link: "/service/ground-transport",
    },
    {
      name: "Company",
      link: "/company",
    },
    {
      name: "Create Account",
      link: "/auth/signup",
    },
    {
      name: <h1 className="relative">Sign In</h1>,
      link: "https://www.ups.com/lasso/login",
    },
    {
      name:(<span className="bg-primary py-1 px-4 text-gray-800  rounded-full">Contact Us</span>) ,
      link: "mailto:support@cargofex.com",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.75 }}
          className="min-h-[400px] bg-midnight/50 border-l border-y border-gray-400/10  backdrop-blur-lg   w-[200px] rounded-l-2xl fixed top-[8rem]   right-0 z-[100]"
        >
          {
            <div className=" pl-8 py-7">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.07,
                      type: "spring",
                      duration: 1.2,
                    },
                  },
                }}
                className="space-y-5 font-[500] tracking-wide text-primary "
              >
                {links.map((nav, i) => (
                  <motion.div
                    onClick={() => setIsOpen(false)}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ type: "spring", bounce: 0, duration: 1.2 }}
                    key={i}
                  >
                    <Link className="block relative" href={nav.link}>
                      {nav.name}

                      {
                        pathname === nav.link && (
                        <motion.span
                          initial={{ height: 0 }}
                          whileInView={{ height: "100%" }}
                          transition={{ type: "spring", bounce: 0, delay: 0.5 }}
                          className=" w-[2px] rounded-lg bg-primary absolute -left-3"
                        ></motion.span>)

                      }

                      
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          }
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
