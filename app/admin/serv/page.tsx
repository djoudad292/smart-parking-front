"use client";
import { useState, useEffect } from "react";
import { FaCar, FaCalendarDay, FaClock , FaParking , FaCarSide } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { PiMonitor } from "react-icons/pi";
import { RiRfidLine } from "react-icons/ri";
import { ImEnter , ImExit } from "react-icons/im";
import { MdPhotoCameraFront } from "react-icons/md";
import mqtt from 'mqtt';

interface E_s {
  id: number;
  name: string;
  matricule: string;
  date: string;
  time: string;
  type: string;
}
export default function Home() {

  const [spots,setSpots] = useState({
    spot_1:true,
    spot_2:true,
    spot_3:true,
    spot_4:true,
    spot_5:true,
    spot_6:true,
    free_spots:6
  })
  
  const List: React.FC<E_s> = ({ id, name, matricule, date, time, type }) => {
    return (
      <tr className=" text-center">
        <td className="p-3 ">
          {type === "entry" ? <ImEnter size={25} color="green" /> : <ImExit size={25} color="red" />}
        </td>
        <td className="p-3">{matricule}</td>
        <td className="p-3">{name}</td>
        <td className="p-3">{date}</td>
        <td className="p-3">{time}</td>
      </tr>
    );
  }

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [person , setPerson] = useState(0);
  const [parked , setParked] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  const [client, setclient] = useState(false);
  const [e_s, setE_s] = useState<E_s[]>([]);
useEffect(() => {
    setclient(true);
    }, []);

useEffect(() => {
  const socket = new WebSocket('ws://localhost:8080');

  socket.onmessage = (e_s) => {
  
      const jsonData = JSON.parse(e_s.data);
      setE_s(jsonData);
  }

  return () => {
    socket.close();
  };
 
}, []);


useEffect(() => {
  // ✅ Configuration - you can move these to env variables later
  const MQTT_BROKER_IP = "192.168.41.146";
  const MQTT_PORT = 8888; // Must be WebSocket port
  const MQTT_TOPIC = "smart-parking/status";
  const brokerUrl = `ws://${MQTT_BROKER_IP}:${MQTT_PORT}`;

  const client = mqtt.connect(brokerUrl);

  client.on("connect", () => {
    console.log("✅ Connected to MQTT broker");
    client.subscribe(MQTT_TOPIC, (err) => {
      if (err) {
        console.error("❌ Subscription error:", err);
      } else {
        console.log(`📡 Subscribed to topic: ${MQTT_TOPIC}`);
      }
    });
  });

  client.on("message", (receivedTopic, message) => {
    if (receivedTopic === MQTT_TOPIC) {
      try {
        const parsed = JSON.parse(message.toString());
        setSpots(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error("❌ Error parsing MQTT message:", error);
      }
    }
  });

  client.on("error", (error) => {
    console.error("❌ MQTT connection error:", error);
  });

  return () => {
    client.end(true); // Clean disconnect
  };
}, []);



  return (
(client &&    <div className="w-full h-full grid grid-cols-12 grid-rows-12 px-5">
      <div className="col-start-1 col-end-13 row-start-2 text-slate-100 row-end-3 bg-blue-700 bg-opacity-50 rounded-xl flex items-center justify-around">
       <div className=" flex items-center justify-center gap-3 ">
        <FaCar size={30} />
        <div className="text-2xl bg-blue-700 p-1 rounded-xl">{person}</div>
            </div>
            <div className=" flex items-center justify-center gap-3 ">
        <FaPerson size={30} />
        <div className="text-2xl bg-blue-700 p-1 rounded-xl">{parked}</div>
            </div>
            <div className=" flex items-center justify-center gap-3 ">
        <FaCalendarDay size={30} />
        <div className="text-2xl bg-blue-700 p-1 rounded-xl">{currentDate}</div>
            </div>
            <div className=" flex items-center justify-center gap-3 ">
        <FaClock size={30} />
        <div className="text-2xl bg-blue-700 p-1 rounded-xl">{currentTime}</div>
            </div>
      </div>


      <div className=" col-start-1 col-end-7 row-start-4 row-end-12  flex gap-y-1.5 items-center justify-center">
        <div className="h-[90%] w-[90%] grid grid-cols-4 grid-rows-5 p-2 border-x-4 border-y-4 border-gray-700 ">
            <div className=" col-start-1 col-end-2 row-start-1 row-end-2 border-y-8 border-l-8 border-blue-700 "> <FaParking size={70} color="blue" /></div>
            <div className=" col-start-2 col-end-3 row-start-1 row-end-2 border-t-8 border-blue-700 "></div>
            <div className=" col-start-3 col-end-5 row-start-1 row-end-2 border-t-8 border-blue-700 "></div>
            <div className=" col-start-4 col-end-5 row-start-1 row-end-2 border-y-8 border-r-8 border-blue-700 "></div>
            
            <div className=" col-start-1 col-end-2 row-start-2 row-end-3 border-y-8 border-l-8 border-blue-700 flex justify-center items-center">{(!spots.spot_1)&& <FaCarSide size={60} color="blue" />}</div>
            <div className=" col-start-4 col-end-5 row-start-2 row-end-3 border-y-8 border-r-8 border-blue-700 flex justify-center items-center">{(!spots.spot_2)&& <FaCarSide size={60} color="blue" />}</div>

            
            <div className=" col-start-1 col-end-2 row-start-3 row-end-4 border-y-8 border-l-8 border-blue-700 flex justify-center items-center">{(!spots.spot_3)&& <FaCarSide size={60} color="blue" />}</div>
            <div className=" col-start-4 col-end-5 row-start-3 row-end-4 border-y-8 border-r-8 border-blue-700 flex justify-center items-center">{(!spots.spot_4)&& <FaCarSide size={60} color="blue" />}</div>
            <div className=" col-start-4 col-end-5 row-start-4 row-end-5 border-y-8 border-r-8 border-blue-700 flex justify-center items-center">{(!spots.spot_5)&& <FaCarSide size={60} color="blue" />}</div>
          
            <div className=" col-start-1 col-end-2 row-start-4 row-end-5 border-y-8 border-l-8 border-blue-700 flex items-center justify-center">{(!spots.spot_6)&& <FaCarSide size={60} color="blue" />}</div>
            <div className=" col-start-4 col-end-5 row-start-4 row-end-5 flex justify-center items-center "></div>
            <div className=" col-start-1 col-end-2 row-start-5 row-end-6 flex justify-start px-5 items-center  "><PiMonitor size={70} color="blue" /></div>
            <div className=" col-start-4 col-end-6 row-start-5 row-end-6 flex justify-end px-5 items-center "><RiRfidLine size={70} color="blue" /></div>
            <div className=" col-start-2 col-end-3 row-start-5 row-end-6 flex justify-end items-center   "><MdPhotoCameraFront size={70} color="blue" /></div>
        
        </div>
        
        
         </div>
      
      <div className=" col-start-7 col-end-12 row-start-5 row-end-12 flex justify-center items-center">
      <table className="w-full  rounded-lg">
          <tbody>
          {e_s.map((e_s: E_s) => (
  <List key={e_s.id} {...e_s} />
))}
            

          </tbody>
        </table>
        
         </div>

    </div>)
  );
}
