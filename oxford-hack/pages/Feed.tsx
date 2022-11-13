import { type } from "os";
import { useState } from "react";
import Post from "../components/Post";
import TopBar from "../components/TopBar";

export default function Feed(){


    const [posts, setPosts]=useState([1,2,3]);

    return <>
    <div className="flex flex-col bg-one">
        <div>
            <TopBar />
    {posts.map(()=><Post />)}
    </div></div>
    </>
} 