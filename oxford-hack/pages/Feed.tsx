import { type } from "os";
import React from "react";
import { useState } from "react";
import Post from "../components/Post";
import { useRouter } from 'next/router'
import Sheet from 'react-modal-sheet';
import NewPost from "./new-post";
import SideBar from "../components/SideBar";


export default function Feed(){

    const [darkMode, setDarkMode] = useState(true)

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
      <SideBar />
    {isOpen ? <NewPost/> : <></>}   
    {posts.map(()=><Post />)}
    </div>
    
} 

