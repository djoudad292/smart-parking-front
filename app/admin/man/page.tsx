"use client"
import { RiRadioButtonLine } from "react-icons/ri";
import { MdOutlineAddCard , MdDelete } from "react-icons/md";
import { IoIosRadioButtonOff } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
interface user {
    id: number;
    name: string;
    matricule: string;
    rfid: string;
    type: string;
    active: boolean;
}



export default function Home() {
  const [fetch,setFetch]=useState<boolean>(false);
const userrfid = async (id : number) => {
  const rfid = window.prompt("Enter the rfid of the user:", "100");
 await axios.put(`http://localhost:5000/api/web/userrfid/${id}`, {rfid})
 setUser([]);
  setFetch(!fetch); 
 
  
}

const useractive = async (id : number , active: boolean) => {
  await axios.put(`http://localhost:5000/api/web//useractivy/${id}/${active}`)
  setUser([]);
  setFetch(!fetch);

  
}

const deleteuser = async (id : number) => {
await  axios.delete(`http://localhost:5000/api/web/user/${id}`)
  setUser([]);
  setFetch(!fetch);

}
const [user, setUser] = useState<user[]>([]);
useEffect(() => {
    axios.get("http://localhost:5000/api/web/users")
        .then((response) => {
            setUser(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
, [fetch]);
  const Userrow : React.FC<user> =({id,name,matricule,rfid,type,active})=> {
    return(   <div className={` text-center ${type === 'need-rfid' ? `bg-neutral-300` : (type === 'subscribed' ? `bg-green-300` : `bg-red-300`)} border-y-2 h-[7%] flex items-center justify-around `}>
       
      <div className="p-3 w-[30%] flex items-center justify-center text-bold "><div className={`h-3 w-3 rounded-full ${active ? `bg-green-700` : `bg-red-700`  } `}></div></div>                   
      <div className="p-3 w-[30%] flex items-center justify-center text-bold ">{id}</div>
      <div className="p-3 w-[30%] flex items-center justify-center text-bold ">{name}</div>
      <div className="p-3 w-[30%] flex items-center justify-center text-bold ">{matricule}</div>
      <div className="p-3 w-[30%] flex items-center justify-center text-bold ">{rfid}</div>
      <div className="  flex gap-5 items-center w-[30%] justify-center  ">{type === 'need-rfid' ? <MdOutlineAddCard onClick={()=>userrfid(id)} size={30} color="gray" /> : (active ? <IoIosRadioButtonOff size={30} color="red" onClick={()=>useractive(id,false)} /> : <RiRadioButtonLine size={30} color="green" onClick={()=>useractive(id,true)} /> )} <MdDelete size={30} color="red" onClick={()=>deleteuser(id)} /></div>
    </div>)
  }


    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="h-[90%] w-[80%] bg-blue-200 rounded-md">
                <div className="w-full h-[10%] flex items-center justify-around border-b-2 border-blue-500">
                    <div className="w-[15%] flex items-center h-full justify-between">
                        <div className="h-10 w-10 rounded-lg bg-neutral-400"></div>
                        <div className="font-bold text-slate-800"> Need rfid </div>
                    </div>
                    <div className="w-[15%] flex items-center h-full justify-between">
                        <div className="h-10 w-10 rounded-lg bg-green-300"></div>
                        <div className="font-bold text-slate-800"> subscribed </div>
                    </div>
                    <div className="w-[15%] flex items-center h-full justify-between">
                        <div className="h-10 w-10 rounded-lg bg-red-300"></div>
                        <div className="font-bold text-slate-800"> Not subscribed </div>
                    </div>
                    <div className="w-[15%] flex items-center h-full justify-between">
                        <div className="h-10 w-10 rounded-full bg-green-700"></div>
                        <div className="font-bold text-slate-800"> Disactivated </div>
                    </div>
                    <div className="w-[15%] flex items-center h-full justify-between">
                        <div className="h-10 w-10 rounded-full bg-red-700"></div>
                        <div className="font-bold text-slate-800"> Disactivated </div>
                    </div>
                </div>
                <div className="w-full h-[10%] flex items-center justify-center">
               
                  <div className=" text-center w-full flex justify-around">
              <div className="p-3 w-[30%] flex items-center justify-center  text-bold ">--</div>
              <div className="p-3 w-[30%] flex items-center justify-center  text-bold ">ID</div>
              <div className="p-3 w-[30%] flex items-center justify-center  text-bold ">Name</div>
              <div className="p-3 w-[30%] flex items-center justify-center  text-bold ">Matricule</div>
              <div className="p-3 w-[30%] flex items-center justify-center text-bold ">Rfid</div>
              <div className="p-3 w-[30%] flex items-center justify-center text-bold ">Action</div>
            </div>
       
                </div>
             <div className="w-full h-[80%] overflow-y-auto rounded-b-lg flex flex-col gap-0.5">   
       
      {user.map((user: user) => (
        <Userrow key={user.id} {...user} />
        
      ))}
</div>
            </div>
        </div>
    )
}