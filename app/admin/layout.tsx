import Image from "next/image";
import { GiCctvCamera } from "react-icons/gi";
import { MdManageAccounts , MdArchive} from "react-icons/md";
import { SiStatista } from "react-icons/si";
import { ImExit } from "react-icons/im";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-full w-full">
            <div className="h-[10%] w-full bg-blue-400 shadow-md shadow-gray-500   border-b-4 border-yellow-600 flex items-center justify-between ">
             <div className="flex-none flex gap-[5%] h-full items-center w-[80%]">   <Image src="/logo.png" width={80} height={80} className="mx-auto" alt="logo"/>
             <button className=" py-3 w-[15%] flex justify-around items-center bg-blue-300 font-bold bg-opacity-50 text-slate-100 border-x-4 border-gray-700"><GiCctvCamera size={25} /><>Lookout</></button>
             <button className=" py-3 w-[15%] flex justify-around items-center bg-blue-300 font-bold bg-opacity-50 text-slate-100 border-x-4 border-gray-700"><MdManageAccounts size={25} /><>Management</></button>
             <button className=" py-3 w-[15%] flex justify-around items-center bg-blue-300 font-bold bg-opacity-50 text-slate-100 border-x-4 border-gray-700"><SiStatista size={25} /><>Statstics</></button>
             <button className=" py-3 w-[15%] flex justify-around items-center bg-blue-300 font-bold bg-opacity-50 text-slate-100 border-x-4 border-gray-700"><MdArchive size={25} /><>Archive</></button>
            
             </div>
                <div className="flex h-full w-[10%] items-center">
                    <button className="py-3 px-4 flex items-center gap-7 justify-center text-slate-100 rounded-lg bg-blue-300"><ImExit size={25} /><>Logout</></button>
                </div>
            </div>
            <div className="h-[90%] w-full">{children}</div>
        </div>
    )}