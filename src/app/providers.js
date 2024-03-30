"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SidebarProvider } from "@/hooks/useSidebar";
import { ConfigProvider } from "antd";
import {
  QueryClient,
  QueryClientProvider,
  
} from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
    
      },
    },
  });
}

let browserQueryClient = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
export function Providers({ children }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <SidebarProvider>
          <ConfigProvider
            theme={{
              components: {
                Timeline: {
                  tailWidth: 1,
                  tailColor: "#047857",
                },
              },
            }}
          >
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ConfigProvider>
        </SidebarProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
