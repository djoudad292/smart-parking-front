export default function Home(){
    return(
        <div className="h-full w-full flex justify-around  items-center">
            <div className="h-[90%] w-[90%] bg-slate-400 flex flex-col items-center justify-around rounded-xl">
                <div className="text-4xl text-slate-50 font-extrabold">your subscribtion Ends in </div>
                <div className="flex items-center justify-around h-[10%] w-full">
                    <div className="h-full w-[20%] bg-sky-500 font-bold rounded-xl"><div className="w-full h-[90%] text-4xl text-slate-50 flex items-center justify-center">300</div><div className="w-full bg-slate-50 text-sky-800 rounded-b-xl flex items-center justify-center">Days</div>
                    </div>
                    <div className="h-full w-[20%] bg-sky-500 font-bold rounded-xl"><div className="w-full h-[90%] text-4xl text-slate-50 flex items-center justify-center">300</div><div className="w-full bg-slate-50 text-sky-800 rounded-b-xl flex items-center justify-center">Hours</div>
                    </div>
                    <div className="h-full w-[20%] bg-sky-500 font-bold rounded-xl"><div className="w-full h-[90%] text-4xl text-slate-50 flex items-center justify-center">300</div><div className="w-full bg-slate-50 text-sky-800 rounded-b-xl flex items-center justify-center">Minutes</div>
                    </div>
                    <div className="h-full w-[20%] bg-sky-500 font-bold rounded-xl"><div className="w-full h-[90%] text-4xl text-slate-50 flex items-center justify-center">300</div><div className="w-full bg-slate-50 text-sky-800 rounded-b-xl flex items-center justify-center">Seconds</div>
                    </div>
                </div>
                <button className="h-[7%] w-[40%] rounded-xl bg-sky-500 text-slate-50 font-bold text-xl ">Cancel the Subscription</button>
            </div>
        </div>)
    
}