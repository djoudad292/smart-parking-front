import { MdHome } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { ImExit } from "react-icons/im";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-full w-full">
          <div className="h-[10%] w-full bg-sky-600 border-b-4 border-slate-500 flex items-center justify-between px-[5%]">
            <Image src={'/logo.png'} height={100} width={100} alt="" />
            <ImExit size={50} color="white" />
          </div>
            <div className="h-[80%] w-full py-2">{children} </div>
            <div className="h-[10%] w-full flex items-center justify-around bg-sky-500 border-t-4 border-slate-100">
            <MdHome size={50} color="white" />

            <RiVipCrownFill size={50} color="white" />
            <GoGraph size={50} color="white" />
            <FaStar size={50} color="white" />
            </div>


        </div>
    )
}