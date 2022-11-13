import { QqCircleFilled, PlusCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { type } from "os";
import React from "react";
import { useState } from "react";
import Post from "../components/Post";
import { useRouter } from 'next/router'
import Sheet from 'react-modal-sheet';
import NewPost from "./new-post";


export default function Feed(){

const NewPost=()=> {
     const router=useRouter();
    return <div className="text-white" onClick={()=>router.push("/feed")}>
       <p>shit</p>
    </div>
}
    const [posts, setPosts]=useState([1,2,3]);
    const router=useRouter();
    const [isOpen, setOpen] = useState<boolean>(false);

    return <div className="flex bg-one h-full w-full flex-col items-center ">
        <div className="absolute top-4 right-4 flex flex-col justify-between h-[120px] w-[40px]">
        <QqCircleFilled onClick={()=>router.push("/analytics")} className="side-button" />
        <PlusCircleOutlined onClick={()=>{router.push("/new-post"); setOpen(true)} }className="side-button"/>
        <LogoutOutlined onClick={()=>router.push("/landing")} className="side-button" />
        </div>
    {isOpen ? <NewPost/> : <></>}   
    {posts.map(()=><Post />)}
    </div>
    
} 

