import { MdHome } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { FaStar } from "react-icons/fa";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-full w-full">
            <div className="h-[90%] w-full">{children} </div>
            <div className="h-[10%] w-full flex items-center justify-around bg-sky-500 border-t-4 border-slate-100">
            <MdHome size={40} color="white" />
            <RiVipCrownFill size={40} color="white" />
            <GoGraph size={40} color="white" />
            <FaStar size={40} color="white" />
            </div>


        </div>
    )
}