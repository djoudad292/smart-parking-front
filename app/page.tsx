import Image from "next/image"
export default function Home(){
    return(
        <div className="h-full w-full bg-gradient-to-b from-slate-100 to-gray-500  flex items-center justify-center">
                <div className=" md:text-xl lg:text-sm lg:h-[80%] py-5 md:h-[90%] lg:w-[50%] md:w-[90%] rounded-lg flex flex-col items-center justify-evenly bg-slate-700 border-2 border-slate-200 border-opacity-60 shadow-md ">

                    <Image src="/logo.png" width={200} height={200} className="mx-auto mb-10" alt="logo"/>
                    <input type="email" placeholder="Email ... " className="p-1 lg:py-4 md:py-4 text-lg lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " />
                    <input type="password" placeholder="Password ... " className="p-1 lg:py-4 text-lg md:py-4 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " />
                 <div className=" mt-14 lg:w-[70%] md:w-[90%] md:flex-col lg:flex-row md:gap-4 flex lg:justify-between items-center lg:text-[1.02rem] ">   <button className="p-1 lg:p-4 lg:py-2 md:py-7 lg:w-[40%] md:w-full text-slate-50 bg-blue-400 rounded-lg">Login</button>
                    <button className="p-1 lg:p-4 lg:py-2 md:py-7 lg:w-[40%] md:w-full text-slate-50 bg-gray-500 rounded-lg">Sign up</button>
                </div>
                </div>
       
        </div>
    )
}