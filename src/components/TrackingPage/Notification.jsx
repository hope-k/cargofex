"use client";
import React, { useState, useCallback } from "react";
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

const Notification = ({ notifications }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentNotification, setCurrentNotification] = useState(null);

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
            onClick={() => setCurrentNotification(notification)}
            onPress={onOpen}
            description={moment(notification.created_at).fromNow()}
          >
            <div className="flex group cursor-pointer items-center justify-between text-black ">
              <div>
                <h1 className="text-sm font-semibold">{notification.title}</h1>
                <span className="text-xs lowercase flex items-center">
                  view message
                  <MoveRight className="w-14 h-4 pl-2 stroke-[1px]" />
                </span>
              </div>
            </div>
            {currentNotification?.id === notification?.id && (
              <Modal
                backdrop="blur"
                key={notification.id}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
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
