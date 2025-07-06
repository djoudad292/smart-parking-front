"use client";
import { MdHome } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { ImExit } from "react-icons/im";
import { useEffect} from "react";
import axios from "axios";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const handlecheck = async () => {
      const response = await axios.get("http://localhost:5000/api/users/hasRFID", { withCredentials: true });
      if (response.status !== 200) {
        alert("You have RFID");
      }
      const response1 = await axios.get("http://localhost:5000/api/users/hascredit", { withCredentials: true });
      if (response1.status !== 200) {
        alert("You have RFID");
      }
    }

    return (
        <div className="h-full w-full">
          <div className="h-[10%] w-full bg-sky-600 border-b-4 border-slate-500 flex items-center justify-between px-[5%]">
            <Image src={'/logo.png'} height={100} width={100} alt="" />
            <ImExit size={50} color="white" />
          </div>
            <div className="h-[80%] w-full py-2">{children} </div>
            <div className="h-[10%] w-full flex items-center justify-around bg-sky-500 border-t-4 border-slate-100">
            <MdHome size={50} color="white" />

            <RiVipCrownFill size={50} color="white"  />
            <GoGraph size={50} color="white" />
            <FaStar size={50} color="white" />
            </div>


        </div>
    )
}