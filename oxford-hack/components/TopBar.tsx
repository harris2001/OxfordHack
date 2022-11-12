import { UserAddOutlined, UserOutlined } from "@ant-design/icons";


export default function TopBar(){
    return <>
    <div className="relative top-0 h-10 w-full bg-green-300">
        <UserOutlined className="scale-100 ml-5 mt-3 hover:scale-150 hover:text-white hover:cursor-pointer"/>
    </div>
    </>
}