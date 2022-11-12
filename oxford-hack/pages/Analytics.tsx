import { useEffect, useState } from "react";
import MetricBlock from "../components/MetricBlock"

export default function Analytics() {

    const [email, setEmail] = useState("");
    
    useEffect(() => {
        setEmail("oltea1907@gmail.comm")
    },[]);

    return  <div className="flex flex-col w-full h-full rounded-lg shadow-md bg-white mx-[10%]">
        <MetricBlock metric={"Likes"} />
        <MetricBlock metric={"Shares"} />
        <MetricBlock metric={"Comments"} />
</div>
    
}