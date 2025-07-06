"use client"
import axios from "axios"
import {useState , useEffect} from "react"
import Image from "next/image"
export default function Home(){
    const [email , setEmail] = useState<String>("")
    const [password , setPassword] = useState<String>("")
    const [done , setDone] = useState<boolean>(false)

    useEffect(() => {
        const handleCheck = async () => {
          try {
            const response1 = await axios.get("http://localhost:5000/api/users/check-auth-admin", {
              withCredentials: true,
            });
      
            if (response1.status === 200) {
              alert("You are Admin");
              return;
            }
          } catch (err) {
            // Not an admin, try user check
            if (axios.isAxiosError(err)) {
              console.log("Not admin:", err.response?.status);
            } else {
              console.log("Not admin: An unknown error occurred");
            }
          }
      
          try {
            const response2 = await axios.get("http://localhost:5000/api/users/check-auth-user", {
              withCredentials: true,
            });
      
            if (response2.status === 200) {
              alert("You are Client");
              return;
            }
          } catch (err) {
            if (axios.isAxiosError(err)) {
                console.log("Not user:", err.response?.status);
            } else {
                console.log("Not user: An unknown error occurred");
            }
          }
      
          alert("Not authenticated");
        };
      
        handleCheck();
      }, [done]);
    

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async() => {
        // Handle form submission logic here
        console.log({
            email,
            password
        });
        const response = await axios.post("http://localhost:5000/api/users/login", {
            email,
            password
        }, {withCredentials: true
        });
        if(response.status === 200)
        setDone(true);
    };
    
    return(
        <div className="h-full w-full bg-gradient-to-b from-slate-100 to-gray-500  flex items-center justify-center">
                <div className=" md:text-xl lg:text-sm lg:h-[80%] py-5 md:h-[90%] lg:w-[50%] md:w-[90%] rounded-lg flex flex-col items-center justify-evenly bg-slate-700 border-2 border-slate-200 border-opacity-60 shadow-md ">

                    <Image src="/logo.png" width={200} height={200} className="mx-auto mb-10" alt="logo"/>
                    <input type="email" placeholder="Email ... " className="p-1 lg:py-4 md:py-4 text-lg lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " onChange={handleEmailChange} />
                    <input type="password" placeholder="Password ... " className="p-1 lg:py-4 text-lg md:py-4 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " onChange={handlePasswordChange}/>
                 <div className=" mt-14 lg:w-[70%] md:w-[90%] md:flex-col lg:flex-row md:gap-4 flex lg:justify-between items-center lg:text-[1.02rem] ">   <button className="p-1 lg:p-4 lg:py-2 md:py-7 lg:w-[40%] md:w-full text-slate-50 bg-blue-400 rounded-lg" onClick={()=>handleLogin()}>Login</button>
                    <button className="p-1 lg:p-4 lg:py-2 md:py-7 lg:w-[40%] md:w-full text-slate-50 bg-gray-500 rounded-lg">Sign up</button>
                </div>
                </div>
       
        </div>
    )
}