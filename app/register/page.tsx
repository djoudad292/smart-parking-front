import Image from "next/image"
export default function Home(){
    return(
        <div className="h-full w-full  flex items-center justify-center bg-gradient-to-t from-slate-100 to-gray-500">
                <div className=" md:text-xl lg:text-sm lg:h-[90%] py-5 sm:h-max md:h-[95%] lg:w-[50%] md:w-[95%] rounded-lg flex flex-col items-center justify-around bg-slate-700 border-2 border-slate-500 border-opacity-60 shadow-md ">

                    <Image src="/logo.png" width={200} height={200} className="mx-auto" alt="logo"/>
                    <input type="text" placeholder="name ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " />
                  
                    <input type="email" placeholder="Email ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " />
                    <input type="password" placeholder="Password ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " />
                    <input type="phone" placeholder="phone ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " />
                    <input type="number" placeholder="matricule ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " />
                    <label className="cursor-pointer rounded-full px-5 py-3 lg:w-[70%] md:w-[90%] text-xl text-gray-300 ">
  <input type="file" accept="image/*" className="hidden" />
  Upload Image
</label>

                  
                 <div className="lg:w-[70%] md:w-[90%] md:flex-col lg:flex-row md:gap-4 flex lg:justify-between items-center">  
                 <button className="p-1 lg:py-2 md:py-7 lg:w-[40%] md:w-full text-slate-50 bg-gray-500 rounded-lg">Sign up</button>
                  <button className="p-1 lg:py-2 md:py-7 lg:w-[40%] md:w-full text-slate-50 bg-blue-400 rounded-lg">Login</button>
                    
                </div>
                </div>
       
        </div>
    )
}