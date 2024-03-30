import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";

export const getShipment = async ({ queryKey }) => {
  const trackingNo = queryKey[1];
  console.log("KEY", trackingNo);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/shipment/?tracking_number=${trackingNo}`,
    { cache: "no-cache" }
  );
  return response.json();
};

export default function useShipment() {
  const searchParams = useSearchParams();
  const trackingNo = searchParams.get("tracking_number");
  return useQuery({
    queryKey: ["shipment", trackingNo],
    queryFn: getShipment,
    placeholderData: keepPreviousData,
  });
}
