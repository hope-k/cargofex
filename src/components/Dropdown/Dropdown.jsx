import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={link.name}
      className="relative group py-8 px-4 "
    >
      {/* dropdown parent */}
      <Link
        href={link?.link}
        className="flex flex-row  items-center justify-center hover:text-primary duration-300 transition-colors ease-soft-spring"
      >
        {link.name}
        {link?.children && (
          <span>
            <ChevronDown className="stroke-[1px]" />
          </span>
        )}
      </Link>

      {/* DROPDOWN CHILD */}
      <AnimatePresence mode="sync">
        {link?.children && isHovered && (
          <motion.div
            className="absolute top-20 bg-white text-black p-2 left-0 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 origin-top"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15}}
            transition={{
              duration: 0.27,
              type: "spring",
              bounce: 0,
            }}
          >
            {link.children.map((child) => (
              <Link
                className="flex flex-row items-start text-base gap-2 whitespace-nowrap p-4 pr-14 justify-start hover:bg-gray-200 rounded-xl"
                key={child.name}
                href={child.link}
              >
                {child.icon && (
                  <div>
                    <span className="text-primary">{child.icon}</span>
                  </div>
                )}
                <div className="flex flex-col capitalize">
                  <span className="font-[500] tracking-wide">{child.name}</span>
                  <span className="text-gray-500 font-[400]">learn more</span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
