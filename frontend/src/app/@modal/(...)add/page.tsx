"use client";
import Add from "@/app/add/page";
import {redirect, useRouter} from "next/navigation";
import xIcon from '../../../icons/x-solid.svg'
import {useRef} from "react";
import {ServerActions} from "@/hooks/serverActions";
import {useSocket} from "@/hooks/useSocket";

export default function Modal() {
    const router = useRouter()
    const inp = useRef<HTMLInputElement | null>(null);
    const {socket} = useSocket();
    function handleClick(e) {
        if (inp.current) {
            const content = inp.current.value;
            ServerActions(content,socket);
            inp.current.value = "";
        }
    }
    function handleHide(e){
        e.stopPropagation()
        if(e.target.classList.contains("modal-close")){
            router.back();
        }
    }
    return(
        <div className="modal modal-close" id="modal" onClick={e => handleHide(e)}>
            <div className="container m-auto mt-40" style={{width:"600px",zIndex:"3"}}>
                <div className="items flex flex-col rounded-2xl shadow-lg p-8 bg-white" style={{boxShadow: "1px 1px 16px rgb(0, 0, 0, 0.2)"}}>
                    <div className="flex "><img src={xIcon.src}  className="modal-close w-4 h-4 cursor-pointer" onClick={e => handleHide(e)}/> </div>
                    <h1 className="text-center text-2xl text-violet-700 font-bold mb-10">Add new task</h1>
                    <input ref={inp} className=" h-12 rounded-md border border-violet-800 text-2xl px-4 border-2" type="text"/>
                    <button onClick={e => handleClick(e)} className="bg-violet-700 text-white h-12 mt-4 rounded-md">Add</button>
                </div>
            </div>
        </div>
    )
}