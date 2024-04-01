
'use client'
import Image from "next/image";
import { LogOut } from "lucide-react";
import { Inter } from "next/font/google";
import {deleteCookie} from "cookies-next"
import {useRouter} from 'next/navigation'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});


export default function Layout({ children }) {
  const router = useRouter()
  const handleExit = () => {
    deleteCookie('tracking_number')
    router.replace('/')
  }
  return (
    <div className={inter.classNames}>
      <header className=" bg-white">
        <div className="flex container justify-between items-center py-4">
          <Image alt="logo" width={200} height={100} src="/images/blacklogo.png" />
          <button onClick={() => handleExit()}>
            <span className="text-red-500 text-sm font-semibold items-center space-x-1 flex">
              <span>Exit</span>
              <LogOut />
            </span>
          </button>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}
