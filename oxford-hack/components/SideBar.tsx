import router, { useRouter } from "next/router";
import React from "react";
import { QqCircleFilled,BulbOutlined, PlusCircleOutlined,LineChartOutlined, LogoutOutlined } from "@ant-design/icons";


export default function SideBar(){

    const router=useRouter();

    return   <div className="fixed top-4 right-4 flex flex-col justify-between h-[120px] w-[40px]">
        <QqCircleFilled onClick={()=>router.push("/profile")} className="side-button" />
        <PlusCircleOutlined onClick={()=>router.push("/new-post") }className="side-button"/>
        <LogoutOutlined onClick={()=>router.push("/landing")} className="side-button" />
    
        </div>
}