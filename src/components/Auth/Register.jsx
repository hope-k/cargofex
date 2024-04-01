"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import ButtonSpinner from "@/animations/trackingbutton";
import Lottie from "lottie-react";
import { MoveRight } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    full_name: "",
    email: "",
    phone: "",
    company: "",
    job_title: "",
    address: "",
    password: "",
    password_confirm: "",
  });

  const { mutate, isPending, data, error } = useMutation({
    mutationFn: (formData) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup/`,
        formData
      );
    },
    onError: (error) => {
      toast.error(error.response.data.errors[0]?.detail, { id: "signup" });
    },
    onSuccess: (data) => {
      setFormData({
        username: "",
        full_name: "",
        email: "",
        phone: "",
        company: "",
        job_title: "",
        address: "",
        password: "",
        password_confirm: "",
      });
      toast.custom(
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
            className="bg-primary text-black font-semibold text-sm p-3 rounded-xl"
          >
            Your account will be reviewed by our team. Thank you for signing up!
          </motion.div>,
        { id: "signup", duration: 5000 }
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate password
    if (formData.password !== formData.password_confirm) {
      toast.error("Passwords do not match", { id: "signup" });
      return;
    }
    mutate(formData);
    toast.loading("Creating your account. Please wait...", {
      id: "signup",
      className: "text-sm font-semibold text-midnight",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

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
            <form
              onChange={handleChange}
              onSubmit={handleSubmit}
              className="flex w-full justify-center items-center flex-col gap-6"
            >
              <div className="flex flex-wrap gap-2">
                <Input
                  className=" text-[17px]"
                  variant="flat"
                  type="text"
                  label="User Name"
                  name="username"
                  isRequired
                />
                <Input
                  className="flex-1 text-[17px]"
                  variant="flat"
                  type="text"
                  label="Full Name"
                  name="full_name"
                  isRequired
                />
                <Input
                  className="flex-1"
                  variant="flat"
                  type="email"
                  label="Email"
                  name="email"
                  isRequired
                />
                <Input
                  name="phone"
                  isRequired
                  variant="flat"
                  type="text"
                  label="Phone Number"
                />
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
                  name="job_title"
                />
                <Input
                  name="address"
                  isRequired
                  variant="flat"
                  type="text"
                  label="Address"
                />
                <Input
                  className="flex-1"
                  variant="flat"
                  type="password"
                  label="Password"
                  name="password"
                  isRequired
                />
                <Input
                  className="flex-1"
                  variant="flat"
                  type="password"
                  label="Password Confirm"
                  name="password_confirm"
                  isRequired
                />
              </div>
              <button
                type="submit"
                className="bg-primary py-2 px-6 rounded-xl "
              >
                {isPending ? (
                  <div className="w-16 h-4 flex items-center p-2 ">
                    <Lottie animationData={ButtonSpinner} />
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    Sign Up <MoveRight strokeWidth={"1px"} />
                  </span>
                )}{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
