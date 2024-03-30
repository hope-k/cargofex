"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Video from "next-video";
import Image from "next/image";
import Player from "react-player";

const VideoModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      size=""
      classNames={{
        body: " ",
        base: " max-w-min min-w-min  bg-midnight relative",
        closeButton: "absolute z-[100] text-white hover:text-gray-800 hover:bg-white/90 active:bg-white/90",
      }}
    >
      <ModalContent className="relative w-fit h-min ">
        {(onClose) => (
          <>
            <ModalBody className="   bg-primaryBg h-full w-full relative px-0 py-0 ">
              <div className="rounded-xl relative w-[320px] h-[180px]  sm:w-[640px] sm:h-[360px]  ">
                <Player
                  controls
                  width="100%"
                  height="100%"
                  light={"/hero/air.jpg"}
                  playing={true}
                  playIcon={
                    <Image
                      src="/playbutton.svg"
                      alt="featured-video"
                      width={70}
                      height={70}
                    />
                  }
                  url={"/assets/featured.mp4"}
                />
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
