import { TableOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import avatar from "./avatar.jpg"


export default function Post(){
    
    const[comments, setComments]=useState<string[]>([]);
    const[tags,setTags]=useState<string[]>([]);
    const[userName, setUsername]=useState<string>("");
    const[likes, setLikes]=useState<number>(0);
    const[text, setText]=useState<string>("")

    async function fecthData(){
        setTags(["gym, work"])
        setUsername("oltea")
        setLikes(123)
        setText("Hello there bio")
    }
    
    return <>
    <div className="w-[70%] shadow-lg">
        <div className="h-7 bg-green-200 ml-[60%] mt-10 hover:scale-110 hover:cursor-pointer hover:-translate-x-2  transition duration-300 ease-in-out ">
            <p>avatar here</p>
        </div>
    
    <div className="flex flex-col h-80 bg-gray-100 ">
        <div className=" w-full h-fit h-80 bg-green-800">
            {/* <p>photo</p> */}
            <img src={avatar.src} alt="" />
        </div>
        <div className="flex">
            <button

            className=" flex-grow  hover:font-bold m-3 hover:scale-110 transition duration-300"
            >Like</button>
            <button className="button ml-2 mr-2">Coment</button>
            <button className="button">Share</button>
         
        </div>
      
            
    </div>  
    </div>
    </>
}