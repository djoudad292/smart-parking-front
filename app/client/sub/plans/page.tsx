import { FaMoneyBill } from "react-icons/fa";
export default function Home(){
    return (
        <div className="h-full w-full flex flex-col items-center justify-around">
            <div className="h-[30%] w-[90%] rounded-2xl bg-slate-400 text-slate-50 border-2 border-sky-700 flex flex-col items-center justify-around">
                <div className="w-[85%] text-[2rem] font-bold">Plan 01 : Week</div>
                <div className="w-[70%] whitespace-normal font-light text-[1.5rem]">Description for plan 1</div>
                <div className="w-[85%] flex items-center gap-10"><FaMoneyBill color="white" size={20} /><div className="text-lg font-extrabold">500 DA</div></div>
                <div className="h-[15%]"><button className="h-full px-5 bg-sky-500 rounded-full text-xl">Choose this plan</button></div>
            </div>
            <div className="h-[30%] w-[90%] rounded-2xl bg-slate-400 text-slate-50 border-2 border-sky-700 flex flex-col items-center justify-around">
                <div className="w-[85%] text-[2rem] font-bold">Plan 01 : Mounth</div>
                <div className="w-[70%] whitespace-normal font-light text-[1.5rem]">Description for plan 2 </div>
                <div className="w-[85%] flex items-center gap-10"><FaMoneyBill color="white" size={20} /><div className="text-lg font-extrabold">2000 DA</div></div>
                <div className="h-[15%]"><button className="h-full px-5 bg-sky-500 rounded-full text-xl">Choose this plan</button></div>
            </div>
            <div className="h-[30%] w-[90%] rounded-2xl bg-slate-400 text-slate-50 border-2 border-sky-700 flex flex-col items-center justify-around">
                <div className="w-[85%] text-[2rem] font-bold">Plan 01 : Year</div>
                <div className="w-[70%] whitespace-normal font-light text-[1.5rem]">Description for plan 3</div>
                <div className="w-[85%] flex items-center gap-10"><FaMoneyBill color="white" size={20} /><div className="text-lg font-extrabold">15000 DA</div></div>
                <div className="h-[15%]"><button className="h-full px-5 bg-sky-500 rounded-full text-xl">Choose this plan</button></div>
            </div>
        </div>
    )
}