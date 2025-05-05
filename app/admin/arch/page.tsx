"use client";
import {useState, useEffect} from "react";
import { IoMdDownload } from "react-icons/io";
import axios from "axios";
interface E_s {
    id: number;
    name: string;
    matricule: string;
    date: string;
    time: string;
    type: string;
  }
export default function Home(){
    const [month,setMonth]=useState<string>("");
    const [year,setYear]=useState<string>("");

    const [e_s, setE_s] = useState<E_s[]>([]);

    const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMonth(e.target.value);
    }
    const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    }

    const Archive:React.FC<E_s> = ({ id, name, matricule, date, time, type }) => {
        return (
            <tr className="h-[50px]">
            <th className="p-2 border-b-2 border-slate-50">{id}</th>
            <th className="p-2 border-b-2 border-slate-50">{name}</th>
            <th className="p-2 border-b-2 border-slate-50">{matricule}</th>
            <th className="p-2 border-b-2 border-slate-50">{date}</th>
            <th className="p-2 border-b-2 border-slate-50">{time}</th>
            <th className="p-2 border-b-2 border-slate-50">{type}</th>


        </tr>
        );
    }
    useEffect(() => {
        const Archive = async () => {
            const response = await axios.get(`http://localhost:5000/api/web/entries`);
            setE_s(response.data);
        }
        Archive();
      }, []);
      function downloadJsonAsCsv(jsonData: Record<string, any>[], filename = 'archive.csv') {
        // Convert JSON to CSV string
        const csvRows = [];
        
        // Get headers
        const headers = Object.keys(jsonData[0]);
        csvRows.push(headers.join(','));
        
        // Add data rows
        jsonData.forEach(row => {
          const values = headers.map(header => {
            // Escape quotes and handle null/undefined
            const value = row[header] === null || row[header] === undefined ? '' : row[header];
            return `"${String(value).replace(/"/g, '""')}"`;
          });
          csvRows.push(values.join(','));
        });
      
        // Create CSV content
        const csvString = csvRows.join('\n');
        
        // Create download link
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        
        // Create invisible download link and trigger click
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      const filter = async () => {
        const setArchive = await axios.post(`http://localhost:5000/api/web/entries`, {
            month: month,
            year: year
        });
        setE_s(setArchive.data);
    }

    const downlaod = () => {
        if(e_s.length > 0) downloadJsonAsCsv(e_s);
        else alert("no data to download");
    }
    return(
        <div className="h-full w-full flex justify-center items-center">
            <div className="h-[70%] w-[60%] rounded-lg bg-blue-300">
                    <div className="w-full h-[10%]  flex items-center justify-between px-10 rounded-t-lg border-b-4 border-slate-50 ">
                        <div className="flex items-center gap-10">
                            <input type="number" placeholder="mounth ..." className="p-2 px-3 rounded-xl bg-slate-100" onChange={onChangeMonth} />
                            <input type="number" placeholder="year ..." className="p-2 px-3 rounded-xl bg-slate-100" onChange={onChangeYear} />
                            <button className="p-2 px-16 bg-slate-600 text-slate-50 font-bold rounded-xl" onClick={filter}>Filter</button>
                            </div>
                            <IoMdDownload color="white" size={30} className="ease-linear duration-200 hover:scale-150 cursor-pointer" onClick={downlaod}  />
                    </div>

                    <div className="w-full h-[90%] overflow-y-scroll">
    <table className="w-full h-full border-2 border-slate-50 rounded-b-lg  ">
        <thead className="bg-slate-100">
            <tr className="text-center inset-0">
                <th className="p-2 border-b-2 border-slate-50">ID</th>
                <th className="p-2 border-b-2 border-slate-50">Name</th>
                <th className="p-2 border-b-2 border-slate-50">matricule</th>
                <th className="p-2 border-b-2 border-slate-50">Date</th>
                <th className="p-2 border-b-2 border-slate-50">Time</th>
                
            <th className="p-2 border-b-2 border-slate-50">Type</th>

            </tr>
        </thead>
        <tbody className="text-center text-slate-50 font-extrabold rounded-b-lg">
               {e_s.map((item) => (
                 <Archive key={item.id} {...item} />
                ))}            
            </tbody>
        </table>

                    </div>
            </div>
        </div>
    )
}