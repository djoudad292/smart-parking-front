"use client"
import { useEffect, useState } from "react"
import axios from "axios";
import Countdown, { CountdownRenderProps } from 'react-countdown';

export default function Home() {
    const [endTime, setEndTime] = useState<number>(0); // Renamed from timer to endTime
    const [isClient, setIsClient] = useState(false);

    const handlecancel = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/users/cancelcredit", {}, {
                withCredentials: true,
            });
            if(response.status === 200){
                alert("Your subscription has been cancelled successfully");
                setEndTime(0); // Reset the timer
            }
        } catch (error) {
            alert("Failed to cancel the subscription");
        }
    }

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/users/credittimer", {
                    withCredentials: true,
                });
                // API returns future timestamp directly
                setEndTime(Number(response.data.credit) || 0);
                console.log("End time:", response.data.credit);
            } catch (error) {
                console.error("Error fetching timer:", error);
                setEndTime(0);
            }
        };
        fetchData();
    }, [])

    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
        if (completed || endTime <= Date.now()) {
            return <div className="text-2xl text-white">Your subscription has ended</div>;
        }

        return (
            <div className="flex items-center justify-around h-[10%] w-full">
                <div className="h-full w-[20%] bg-sky-500 font-bold rounded-xl">
                    <div className="w-full h-[90%] text-4xl text-slate-50 flex items-center justify-center">{days}</div>
                    <div className="w-full bg-slate-50 text-sky-800 rounded-b-xl flex items-center justify-center">Days</div>
                </div>
                <div className="h-full w-[20%] bg-sky-500 font-bold rounded-xl">
                    <div className="w-full h-[90%] text-4xl text-slate-50 flex items-center justify-center">{hours}</div>
                    <div className="w-full bg-slate-50 text-sky-800 rounded-b-xl flex items-center justify-center">Hours</div>
                </div>
                <div className="h-full w-[20%] bg-sky-500 font-bold rounded-xl">
                    <div className="w-full h-[90%] text-4xl text-slate-50 flex items-center justify-center">{minutes}</div>
                    <div className="w-full bg-slate-50 text-sky-800 rounded-b-xl flex items-center justify-center">Minutes</div>
                </div>
                <div className="h-full w-[20%] bg-sky-500 font-bold rounded-xl">
                    <div className="w-full h-[90%] text-4xl text-slate-50 flex items-center justify-center">{seconds}</div>
                    <div className="w-full bg-slate-50 text-sky-800 rounded-b-xl flex items-center justify-center">Seconds</div>
                </div>
            </div>
        )
    };

    return (
        <div className="h-full w-full flex justify-around items-center">
            <div className="h-[90%] w-[90%] bg-slate-400 flex flex-col items-center justify-around rounded-xl">
                <div className="text-4xl text-slate-50 font-extrabold">
                    {endTime > Date.now() ? "Your subscription ends in" : "Subscription status"}
                </div>

                {isClient && (
                    endTime > Date.now() ? (
                        <Countdown date={endTime} renderer={renderer} />
                    ) : (
                        <div className="text-2xl text-white">No active subscription</div>
                    )
                )}

                <button 
                    className="h-[7%] w-[40%] rounded-xl bg-sky-500 text-slate-50 font-bold text-xl hover:bg-sky-600 transition-colors"
                    onClick={handlecancel}
                    disabled={endTime <= Date.now()}
                >
                    Cancel Subscription
                </button>
            </div>
        </div>
    )
}