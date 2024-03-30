import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@nextui-org/react";

const Register = () => {
  return (
    <div className=" bg-black pb-[10rem]">
      <div className="sm:max-w-[80vw] mx-auto px-3 flex items-center justify-center top-[7rem] relative  w-full">
        <div className="relative  flex bg-white h-full flex-col md:flex-row w-full justify-center rounded-l-xl rounded-r-xl">
          <div className="relative block  flex-1 min-h-[200px] sm:min-h-full">
            <Image
              src="/create-account.jpg"
              alt="logo"
              layout="fill"
              className="sm:rounded-l-xl rounded-t-xl sm:rounded-t-none"
            />
          </div>
          <div className="flex-1 w-full text-gray-800  font-semibold flex flex-col items-center p-4 sm:p-10 space-y-6">
            <h1 className="text-center">
              Join the <span className="text-primary">CargoFex</span> Family:
              Your Gateway to Efficient Logistics
            </h1>
            <form className="flex w-full justify-center items-center flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Input
                  className="flex-1 text-[17px]"
                  variant="flat"
                  type="text"
                  label="Full Name"
                />
                <Input
                  className="flex-1"
                  variant="flat"
                  type="email"
                  label="Email"
                />
                <Input variant="flat" type="text" label="Phone Number" />
                <Input
                  className="flex-1"
                  variant="flat"
                  type="text"
                  label="Company Name"
                />
                <Input
                  className="flex-1"
                  variant="flat"
                  type="text"
                  label="Job Title"
                />
                <Input variant="flat" type="text" label="Address" />
                <Input
                  className="flex-1"
                  variant="flat"
                  type="password"
                  label="Password"
                />
                <Input
                  className="flex-1"
                  variant="flat"
                  type="password_confirm"
                  label="Password Confirm"
                />
              </div>
              <button
                type="submit"
                className="bg-primary py-2 px-6 rounded-xl "
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
