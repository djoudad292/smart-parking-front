"use client";
import axios from "axios";
interface PlanProps {
    params: {
        plan: string
    }
}
export default function Home(planProps: PlanProps) {
 const handlecredit= async () => {
    try {
        const response = await axios.post("http://localhost:5000/api/users/addcredit", { duration: planProps.params.plan } , {withCredentials: true});
        if (response.status === 200) {
            alert("Payment successful!");
        }
    } catch (error) {
        console.error("Error during payment:", error);
        alert("Payment failed. Please try again.");
    }}
    return(
        <div className="h-full w-full flex justify-center items-center">
                <div className="h-[50%] w-[90%] bg-slate-400 rounded-lg text-slate-50 shadow-2xl shadow-slate-950  flex flex-col items-center justify-around  ">
                    <div className="text-3xl font-bold">You choose {planProps.params.plan} Plan</div>
                    <div className="w-[70%] whitespace-normal font-light text-xl">After choosing this plan you gonna have access for the parking for a {planProps.params.plan} , and in case of deleting your account or disactivating by administation there is no way to get your money back</div>
                    <div className="flex justify-between w-[80%] h-[10%] text-lg "><button className="h-full w-[30%] px-5 rounded-lg bg-sky-500" onClick={()=>handlecredit()}>Continue</button><button className="h-full w-[30%] px-5 rounded-lg bg-red-400">Cancel</button></div>
                </div>
        </div>
    )
}