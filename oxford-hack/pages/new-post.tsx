import { useRouter } from "next/router";
import React, { use, useState } from "react";
import avatar from "../components/avatar.jpg";

export default function NewPost(){
    const router=useRouter();
    const[image, setImage]=useState("");
    const[bio, setBio]=useState("");

    function addImage(){
        setImage("../components/avatar.jpg")
    }

    function handleSubmit(){

    }

    return <div className="text-white items-center flex flex-col  bg-one w-full h-screen">
        {
        image=="" ?
        <button  onClick={()=>addImage()}
        className=" button mt-20 bg-two hover:shadow-md "
        >Add Image</button> :
        <div className="items-center flex flex-col">
        <img className="w-80 h-100 rounded-lg mt-20 " 
        src={avatar.src}/>
        <button 
        onClick={()=>addImage()}
        className=" button mt-5 bg-two hover:shadow-md "
        >Change Image</button>
        </div>
}
        <textarea onChange={(e)=>{setBio(e.target.value)}} placeholder="bio" className=" pl-3 mt-5 focus:border-three focus:border-2 outline-none overflow-y-hidden text-one rounded-md w-80"/>
        <button className="button mt-5 bg-two hover:shadow-md"
        onClick={()=>{handleSubmit(); router.push("/feed")}}>
            Post</button>
        </div>
}