import React from "react";
import { useEffect, useState } from "react";
import avatar from "../components/avatar.jpg";
import MetricBlock from "../components/MetricBlock";
import SideBar from "../components/SideBar";
import { Pie } from '@ant-design/plots';


export default function Profile(){
    const [user, setUser]=useState({});
    const [bio, setBio]=useState("");
    const [posts, setPosts]=useState([1,2,3]);
    const [image, setImage]=useState("");
    const [followed, setFollowed]=useState(false);

    async function fetch(){
        setUser(mock.data.profile);
        setBio(mock.data.profile.bio);
        setImage(avatar.src);
    }

    useEffect(()=>{
         fetch();
    },[])

    function metric(name:string, value:number){
        return <div className="flex flex-col items-center">
            <p className="text-2xl">{name}</p>
            <p className="text-lg">{value}</p>
        </div>
    }

const DemoPie = () => {
  const data = [
    {
      type: 'Likes',
      value: 78,
    },
    {
      type: 'Comments',
      value: 25,
    },
    {
      type: 'Shares',
      value: 18,
    }
  ];
  
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

    return <div className="text-white items-center flex flex-col  bg-one w-full h-screen">
          <SideBar/>
        <div className="flex  flex-row justify-around  bg-two w-[80%] rounded-md h-[100px]">
        <div className="flex flex-col justify-evenly">
        <img className="w-16 h-16 rounded-lg " 
        src={image}/>
        <p className="text-center">{user.id}</p>
        </div>
        {metric("Stalkers", mock.data.profile.stats.totalFollowers)}
        {metric("Stalking", mock.data.profile.stats.totalFollowing)}
        {!followed? <button onClick={()=>setFollowed(true)} className="button">Follow</button> 
        : <button className="button" onClick={()=>setFollowed(false)}>Unfollow</button>}
        </div>
        <div className="flex bg-three mt-2  w-[80%] flex-col rounded-md p-1 items-center">
             {bio}
            </div>

        <div className="flex  w-[80%] p-1 justify-between items-center">
        <MetricBlock metric={"Likes"} />
        <MetricBlock metric={"Comments"} />
         <MetricBlock metric={"Shares"} />
        </div>
        <DemoPie/>
        </div>

    {
  
}}

const mock={"data" :{
    "profile": {
      "id": "0x01",
      "name": "LensProtocol.eth 🌿",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
          "mimeType": null
        },
        "typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    }
  }
}