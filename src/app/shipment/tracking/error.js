"use client";

import { useEffect } from "react";
import { Result, Button } from "antd";
import Link from "next/link";

export default function Error({ error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
            <Link href="/track-shipment">
                <button className="bg-primary text-black rounded-full p-2 px-10">
                    Go Back
                </button>
            </Link>
        }
      />
    </div>
  );
}
