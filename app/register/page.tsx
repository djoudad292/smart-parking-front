"use client"
import {useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios";
import {useRouter} from "next/navigation";
export default function Home(){
    const router = useRouter()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [matricule, setMatricule] = useState("");
    const [image, setImage] = useState<File | null>(null);
    useEffect( () => {

        const handlecheck=async () => {
        const response1 = await axios.get("http://localhost:5000/api/users/check-auth-admin", {withCredentials: true});
     
        
        console.log(response1.data);
        if(response1.status === 200){
            alert("You are  admin");
            return;
        }
        const response2 = await axios.get("http://localhost:5000/api/users/check-auth-user", {withCredentials: true});
     
        
        console.log(response2.data);
        if(response2.status === 200){
            alert("You are Client");
            return;
        }}
        handlecheck();
    }, []);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleSignup = async() => {
      
        // Handle form submission logic here
        console.log({
            name,
            email,
            password,
            matricule,
            image
        });
        const formData = new FormData();
        formData.append("nom", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("matricule", matricule);

        if(image)
            formData.append("photo", image);
        const response = await axios.post("http://localhost:5000/api/users/signup", formData, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          });

            router.push("/")
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    
    const handleMatriculeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatricule(event.target.value);
    }


    return(
        <div className="h-full w-full  flex items-center justify-center bg-gradient-to-t from-slate-100 to-gray-500">
                <div className=" md:text-xl lg:text-sm lg:h-[90%] py-5 sm:h-max md:h-[95%] lg:w-[50%] md:w-[95%] rounded-lg flex flex-col items-center justify-around bg-slate-700 border-2 border-slate-500 border-opacity-60 shadow-md ">

                    <Image src="/logo.png" width={200} height={200} className="mx-auto" alt="logo"/>
                    <input type="text" placeholder="name ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " onChange={handleNameChange} />
                  
                    <input type="email" placeholder="Email ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " onChange={handleEmailChange} />
                    <input type="password" placeholder="Password ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " onChange={handlePasswordChange} />
                    <input type="number" placeholder="matricule ... " className="p-1 lg:py-2 md:py-7 lg:w-[70%] md:w-[90%] border-2 bg-slate-50 rounded-lg border-slate-50 " onChange={handleMatriculeChange} />
                    <label className="cursor-pointer rounded-full px-5 py-3 lg:w-[70%] md:w-[90%] text-xl text-gray-300 ">
  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
  Upload Image
</label>

                  
                 <div className="lg:w-[70%] md:w-[90%] md:flex-col lg:flex-row md:gap-4 flex lg:justify-between items-center">  
                 <button className="p-1 lg:py-2 md:py-7 lg:w-[40%] md:w-full text-slate-50 bg-gray-500 rounded-lg" onClick={()=>handleSignup()}>Sign up</button>
                  <button className="p-1 lg:py-2 md:py-7 lg:w-[40%] md:w-full text-slate-50 bg-blue-400 rounded-lg" onClick={()=>router.push("/")}>Login</button>
                    
                </div>
                </div>
       
        </div>
    )
}