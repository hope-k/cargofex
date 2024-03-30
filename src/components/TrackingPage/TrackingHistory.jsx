"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,

} from "@nextui-org/react";
import { Bell } from "lucide-react";
import moment from "moment";
import { History } from "lucide-react";

const TrackingHistory = ({ history }) => {

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="outline-none flex items-center">
          <History className="text-white" />
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        {history?.map((his, i) => (
          <DropdownItem
            isReadOnly={true}
            description={moment(his.created_at).fromNow()}
            key={i}
          >
            <div className="flex group cursor-pointer items-center justify-between space-y-2 text-black ">
              <div>
                <h1 className="text-sm font-semibold">{his.statusText}</h1>
                <span className="text-xs lowercase flex items-center">
                  {his?.message ? (
                    <span className="text-black capitalize">
                      {his?.message}
                    </span>
                  ) : (
                    <span className="text-black">No Recent History</span>
                  )}
                </span>
              </div>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default TrackingHistory;
