"use client";
import React from "react";
import { variant, variantParent } from "@/animations/staggerChildren";
import { motion } from "framer-motion";
import Link from "next/link";
import SlotCounter from "react-slot-counter";
import Image from "next/image";
import {TrendingUp, Rocket, BriefcaseBusiness, Handshake} from "lucide-react"
import PrinciplesSection from "./PrinciplesSection";

const CompanyPage = () => {
  return (
    <div className=" w-full relative">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(10,27,43,.47), rgba(10,27,43,.98) 70%, #0a1b2b), url("/company.jpg")`,
          backgroundPosition: "center center",
        }}
        className=" w-full  absolute top-0 h-[100vh] object-cover object-center bg-cover bg-no-repeat bg-center "
      />
      <div className=" relative top-[7rem] ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantParent}
          className="space-y-6 container "
        >
          <motion.h2
            variants={variant}
            className="text-primary font-[500] text-sm uppercase tracking-[2px]"
          >
            Our Company
          </motion.h2>
          <motion.h1
            variants={variant}
            className="text-[clamp(2.125rem,4.625vw,4.625rem)] font-[600] leading-[1.05]"
          >
            Servicing the globe
            <br /> <span className="text-primary">since 1979</span>
          </motion.h1>
          <motion.p variants={variant} className="text-gray-200 text-lg ">
            At CargoFex, we are more than just a logistics company – we are the
            <br />
            architects of seamless supply chains, the navigators of global
            <br />
            trade, and the enablers of business growth. With a commitment to
            <br />
            excellence and a passion for customer success, we strive to create
            <br />
            seamless supply chains, bridge distances, and connect opportunities.
            <br />
            Through our expertise, technology-driven approach, and unwavering
            <br />
            dedication, we aim to be the preferred partner for businesses
            <br />
            seeking to navigate the complexities of logistics with confidence.
            <br />
          </motion.p>
        </motion.div>
      </div>
      {/* or mission */}
      <div className="py-[10rem] relative bg-midnight">
        <div className="container  ">
          <div className="flex flex-col md:flex-row w-full justify-between ">
            <div className="space-y-10">
              <h2
                variants={variant}
                className="text-primary font-[500] text-sm uppercase tracking-[2px]"
              >
                Our Mission
              </h2>
              <h1 className="text-[clamp(2rem,2.625vw,2.625rem)] font-[600] leading-[1.1]">
                <span className="text-primary"> We Ship Your Package</span>
                <br />
                With Over 40 Years Of
                <br />
                World Wide Experience{" "}
              </h1>
              <p className="text-gray-300 text-lg ">
                Our mission statement is simplicity itself. To constantly exceed
                <br />
                customer expectations by providing superior freight forwarding
                and
                <br />
                global transportation solutions including air, ocean, and
                customs
                <br />
                brokerage and logistics services.
              </p>
            </div>
            <div className="flex my-6  gap-4 sm:flex-row justify-between flex-col max-w-[49%]">
              <div className="space-y-2">
                <h1 className="text-primary font-[500] text-lg uppercase tracking-[2px]">
                  packages delivered
                </h1>
                <motion.h3
                  whileInView={{ opacity: [0, 1] }}
                  className="text-lg font-semibold"
                >
                  <SlotCounter value={90} animateOnVisible /> million+
                </motion.h3>
              </div>
              <div className="space-y-2">
                <h1 className="text-primary font-[500] text-lg uppercase tracking-[2px]">
                  satisfied clients
                </h1>
                <h3 className="text-lg font-semibold">
                  <SlotCounter value={100} animateOnVisible /> million+
                </h3>
              </div>
              <div className="space-y-2">
                <h1 className="text-primary font-[500] text-lg uppercase tracking-[2px]">
                  years of Experience
                </h1>
                <h3 className="text-lg font-semibold">
                  <SlotCounter value={40} animateOnVisible />+ years
                </h3>
              </div>{" "}
              <div className="space-y-2">
                <h1 className="text-primary font-[500] text-lg uppercase tracking-[2px]">
                  office worldwide
                </h1>
                <h3 className="text-lg font-semibold">
                  <SlotCounter value={90} animateOnVisible />+ Global
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our values */}
      <div className=" w-full mb-10 bg-white py-10">
        <div className="lg:max-w-[80vw] max-w-[95vw] mx-auto">
          <div className="relative min-h-[700px] w-full ">
            <Image
              objectFit="cover"
              className="rounded-lg"
              src={"/ourvalues.jpg"}
              layout="fill"
              alt="our-values"
            />
            <div className="bg-white py-[5%]  px-[14%] absolute bottom-0 left-0 text-black capitalize  rounded-tr-lg">
              <h1 className="relative text-2xl font-bold">
                <span>our values</span>
                <span className="h-[1.2px] w-10 absolute rounded-lg  left-0 -bottom-8 bg-primary"></span>
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-baseline w-full gap-10 justify-between flex-row  text-black mt-10">
            <div className='flex-1  text-center space-y-2 max-w-[30ch]'>
            <TrendingUp className='text-primary flex w-full justify-center font-semibold'/>
              <h1 className="text-xl font-semibold mb-2">
                Continuous improvement
              </h1>
              <p>
                CargoFex employees fulfil all the goals and tasks that are set,
                consistently improve as individuals while developing
                professional competencies and striving for improvement.
              </p>
            </div>{" "}
            <div className='flex-1 text-center space-y-2 max-w-[30ch]'>
            <BriefcaseBusiness  className='text-primary flex w-full justify-center font-semibold'/>
              <h1 className="text-xl font-semibold mb-2">Professionalism</h1>
              <p>
                The ability to adapt to rapidly changing market conditions and
                client needs, focus on exceptionally high quality services, high
                competence and mission-based leadership to create a professional
                approach in the company.
              </p>
            </div>{" "}
            <div className='flex-1 text-center space-y-2 max-w-[30ch]'>
            <Rocket  className='text-primary flex w-full justify-center font-semibold'/>

              <h1 className="text-xl font-semibold mb-2">
                Employee self-motivation{" "}
              </h1>
              <p>
                The cargoFex team quickly completes its tasks, takes the
                initiative, generates ideas, and contributes to their
                implementation.
              </p>
            </div>{" "}
            <div className='flex-1  text-center space-y-2 max-w-[30ch]'>
            <Handshake  className='text-primary flex w-full justify-center font-semibold'/>

              <h1 className="text-xl font-semibold mb-2">
                Reliability and responsibility{" "}
              </h1>
              <p>
                Financial responsibility and integrity determine the confidence
                of our clients. Each employee is responsible for the
                transparency of the company, the protection of confidential
                information, and the performance of their duties, work tasks,
                and commitments during work processes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PrinciplesSection/>
    </div>
  );
};

export default CompanyPage;
