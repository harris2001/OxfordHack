import React, { useState, useContext, useEffect } from "react";
import { Divider } from "antd";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function LogIn(){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const navigate=useNavigate();

	let submitLogIn = async () =>
	{
		// e.preventDefault()
		// try
		// {
		// 	setLoading(true)
		// 	let rest = await value.login(email, password)
		// 	let params = {
		// 		"uid": rest.user.uid
		// 	}
		// 	let res = await axios.get("http://localhost:8080/api/account/get_user", { params: params })
		// 	value.setUser(res.data.user)
		// 	window.localStorage.setItem("selectedKeySideBar", '1-0')
		// 	window.localStorage.setItem("productBreakdownKey", '1')
		// 	window.localStorage.setItem("isLoggedIn", true)
		// 	localStorage.setItem("uid", rest.user.uid)
		// 	navigate("/dashboard")
		// } catch (exc)
		// {
		// 	console.log(exc)
		// 	window.localStorage.removeItem("selectedKeySideBar")
		// 	window.localStorage.removeItem("productBreakdownKey")
		// 	window.localStorage.removeItem("isLoggedIn")
		// 	value.setUser(null);
		// 	alert("Incorrect Email / Password ")
		// }
		// setLoading(false)
	}

	return <>
    <section className="h-screen">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="/resources/logo.png"
          className="w-64 h-64"
          alt="Sample image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>

          Email input 
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
            />
          </div>

          Password input 
          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>

         

          <div className="text-center lg:text-left">
            <button

              type="button"
              className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <div className="flex-col">
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?</p>
             <button
                // onClick={()=>navigate("/sign-up")}
                className="text-orange-600 hover:text-orange-700 focus:text-orange-700 transition duration-200 ease-in-out">
                Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</>
	
}

