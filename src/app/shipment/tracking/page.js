import TrackingPage from "@/components/TrackingPage/TrackingPage";
import useShipment from "@/hooks/useShipment";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getShipment } from "@/hooks/useShipment";
import { cookies } from "next/headers";

export default async function Tracking({ searchParams }) {
  const queryClient = new QueryClient();
  const trackingNo = searchParams?.tracking_number;

  await queryClient.prefetchQuery({
    queryKey: ["shipment", trackingNo],
    queryFn: getShipment,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TrackingPage />
    </HydrationBoundary>
  );
}
