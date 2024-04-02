import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Image, Space } from "antd";
import { ChevronRight, Minimize2 } from "lucide-react";

export default function ShipmentDetails({
  isOpen,
  onOpenChange,
  shipment,
  status,
  statusText,
}) {
  const currentStatusColor = (currentStatus) => {
    switch (currentStatus) {
      case "preparing":
        return "text-blue-400";
      case "in_transit":
        return "text-primary";
      case "delivered":
        return "text-green-400";
      case "returned":
        return "text-red-400";
      case "delayed":
        return "text-yellow-400";
      case "on_hold":
        return "text-yellow-300";

      default:
        return "text-white";
    }
  };

  const customCloseButton = (
    <div classname="p-4">
      <Minimize2 strokeWidth={"1px"} />
    </div>
  );
  return (
    <>
      <Modal
        closeButton={customCloseButton}
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-gray-800">
                Shipping Information
              </ModalHeader>
              <ModalBody className="text-gray-800">
                <div className="flex gap-[3rem]  border-b border-gray-200 pb-3">
                  <div>
                    <h1 className="text-sm font-semibold">Tracking Number</h1>
                    <span>{shipment?.tracking_number}</span>
                  </div>{" "}
                  <div>
                    <h1 className="text-sm font-semibold">Current Status</h1>
                    <span className={`${currentStatusColor(status)} `}>
                      {statusText}
                    </span>
                  </div>
                </div>

                {/* receipient information */}

                <div className="flex gap-[3rem]  border-b border-gray-200 pb-3">
                  <div>
                    <h1 className="text-sm font-semibold">Recipient</h1>
                    <span>{shipment?.receiver_name}</span>
                  </div>{" "}
                  <div>
                    <h1 className="text-sm font-semibold">Phone</h1>
                    <span>{shipment?.receiver_phone}</span>
                  </div>
                  {/* address */}
                  <div>
                    <h1 className="text-sm font-semibold">Address</h1>
                    <span>{shipment?.destination?.address}</span>
                  </div>
                </div>

                {/* preview shipment */}

                <div>
                  <h1 className="text-black font-semibold mb-2">
                    Preview Shipment
                  </h1>
                  <div className='space-x-2'>
                    {shipment?.images?.map((img, i) => (
                      <Image
                        key={i}
                        preview={{
                          maskClassName: "rounded-xl",
                          imageRender: (node) => {
                            return (
                              <div className="sm:w-[600px] sm:h-[500px] w-[90vw] h-[300px] rounded-xl">
                                {React.cloneElement(node, {
                                  width: "100%",
                                  height: "100%",
                                  className: "rounded-xl",
                                  src: img?.image,
                                })}
                              </div>
                            );
                          },
                        }}
                        className="rounded-lg "
                        width={65}
                        height={55}
                        src={img?.image}
                      />
                    ))}
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
