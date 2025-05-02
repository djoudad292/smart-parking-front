export default function Home(){
    return(
        <div className="h-full w-full flex items-center justify-center">
            <form className="bg-sky-500 h-[60%] w-[80%] flex items-center flex-col justify-around rounded-xl ">
                <div className="font-extrabold text-3xl text-slate-50">Insert a Feedback</div>
                <input type="number" placeholder="Rate from 1 to 5 ..." className="rounded-lg p-1 bg-slate-50 border-2 border-sky-200 w-[90%] h-[10%]" />
                <textarea placeholder="Description ..." className="rounded-lg p-1 bg-slate-50 border-2 border-sky-200 w-[90%] h-[40%]"></textarea>
                <button className="h-[10%] w-[40%] bg-slate-50 rounded-lg text-sky-800 font-extrabold">Send the feedback</button>
            </form>
        </div>
    )
}