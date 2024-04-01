"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Bell } from "lucide-react";
import moment from "moment";
import { MoveRight } from "lucide-react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Notification = ({ notifications }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentNotificationIdx, setCurrentNotificationIdx] = useState(null);

  useEffect(() => {
    if (notifications?.length > 0) {
      toast.custom(
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.1,
          }}
          className="bg-primary text-white font-semibold text-xs p-3 rounded-2xl"
        >
          You have {notifications?.length} new notifications
        </motion.div>,
        { id: "signup", duration: 5000 },
        { id: "notification" }
      );
    }
  }, []);

  const handleOnPress = (i) => {
    onOpen();
    setCurrentNotificationIdx(i);
  };

  return (
    <Dropdown closeOnSelect={false} shouldCloseOnInteractOutside={false}>
      <DropdownTrigger>
        <button className="outline-none flex items-center">
          <Badge content={notifications?.length} variant="solid" color="danger">
            <Bell className="text-white" />
          </Badge>{" "}
        </button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={false}>
        {notifications?.map((notification, i) => (
          <DropdownItem
            key={i}
            onPress={() => handleOnPress(i)}
            description={moment(notification.created_at).fromNow()}
          >
            <div className={` ${currentNotificationIdx === i && 'border-l-3 border-primary pl-1'} flex group cursor-pointer items-center transition-all duration-400 ease-soft-spring justify-between text-black `}>
              <div>
                <h1 className="text-sm font-semibold">{notification.title}</h1>
                <span className="text-xs lowercase flex items-center">
                  view message
                  <MoveRight className="w-14 h-4 pl-2 stroke-[1px]" />
                </span>
              </div>
            </div>
            {currentNotificationIdx === i && (
              <Modal
                backdrop="blur"
                key={notification.id}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={() => setCurrentNotificationIdx(null)}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalBody>
                        <h1 className="text-base text-gray-800 font-semibold w-fit ">
                          {notification.title}
                        </h1>
                        <p className="text-black">{notification?.message}</p>
                        <span className="text-xs text-gray-500">
                          {moment(notification.created_at).fromNow()}
                        </span>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            )}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Notification;
