import { CommentOutlined, HeartFilled, HeartOutlined, ShareAltOutlined, TableOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import avatar from "./avatar.jpg"


export default function Post(){
    
    const[comments, setComments]=useState<string[]>([]);
    const[tags,setTags]=useState<string[]>([]);
    const[userName, setUsername]=useState<string>("");
    const[likes, setLikes]=useState<number>(0);
    const[text, setText]=useState<string>("")
    const[liked, setLiked]=useState<boolean>(false);

    async function fecthData(){
        setTags(["gym, work"])
        setUsername("oltea")
        setLikes(123)
        setText("Hello there bio")
    }
    
    return <>
    <div className="flex flex-col w-[350px] h-[550px]">
        <div className="t-0 hover:rounded-md motion-reduce:hover:transition-transform duration-500 ease-out items-center w-fit p-1 font-normal bg-three  flex hover:scale-[1.115] hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer ">
            <img src={avatar.src} className="w-10 h-10 rounded-full mr-2" />
            <p className="mr-1">avatar here</p>
        </div>
    
    <div className="flex flex-col min-h-min min-w-min bg-three ">
        <div className=" w-fit">

            <img src={avatar.src} alt="" />
        </div>
        <div className="flex w-fit h-[40px] items-center justify-evenly">
            <div onClick={()=>setLiked(!liked)}className="button ml-1 ">
               {liked? <HeartFilled />:<HeartOutlined />  }
            <button>Like</button></div>
            <div className="button">
                <CommentOutlined className="mr-4"/>
            <button>Comment</button></div>
            <div className="button mr-1 ">
                <ShareAltOutlined />
            <button>Share</button></div>
         
        </div>
      
            
    </div>  
    </div>
    </>
}