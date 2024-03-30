import { Barlow } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "react-hot-toast";
import {cookies} from "next/headers"
import {redirect} from "next/navigation"

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
});

export default function RootLayout({ children }) {
  // const cookieStore = cookies()
  // const trackingNo = cookieStore.get('tracking_number')?.value || null;
  // console.log(trackingNo,  '===========>')
  // if (trackingNo) {
  //   redirect(`/shipment/tracking/?tracking_number=${trackingNo}/`)
  // }

  return (
    <html lang="en" className="">
      <body className={`${barlowFont.className} w-full text-white `}>
        <Providers>
          <Sidebar />
          <div>
            <Sidebar />
            <AntdRegistry>
              <Toaster />
              {children}
            </AntdRegistry>
          </div>
        </Providers>
      </body>
    </html>
  );
}
