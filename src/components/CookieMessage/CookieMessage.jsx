import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieMessage = () => {
  const [showMessage, setShowMessage] = useState(true);
  return (
    <AnimatePresence>
      {showMessage && (
        <div
          className={` fixed  z-[999] p-2 rounded-full  w-full flex items-center justify-center top-16  `}
        >
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            transition={{ type: "spring", duration: 1.3, bounce: 0 }}
            exit={{ y: -70, opacity: 0 }}
            className="bg-slate-50 text-gray-900  p-4 sm:pl-1 sm:p-0  rounded-xl "
          >
            <h1>
              By clicking ‘Accept’, you agree to our use of cookies. For more
              details, please see our{" "}
              <span className="underline">Privacy Policy</span>
              <button
                className="bg-primary transition-all duration-300 ease-in rounded-xl p-2 ml-1 hover:bg-midnight hover:text-white"
                onClick={() => setShowMessage(false)}
              >
                Accept
              </button>
            </h1>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CookieMessage;
