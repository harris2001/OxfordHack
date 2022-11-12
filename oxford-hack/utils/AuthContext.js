import React, { useMemo, useContext, useState, useEffect, createContext } from "react"
import { auth } from "./auth"
import axios from "axios";

export const UserContext = createContext(null);

export function useAuth() {
	return useContext(UserContext)
}

export function AuthProvider() {
	const [currentUser, setCurrentUser] = useState(null)

	function setUser(body) {
		setCurrentUser(body)
		console.log(body)
		return currentUser
	}

	async function signup(email, password) {

		setCurrentUser(email)
		return auth.createUserWithEmailAndPassword(email, password)
	}

	async function login(email, password) {

		const res = auth.signInWithEmailAndPassword(email, password)
		return res
	}

	async function logout() {
		setCurrentUser(null)
		localStorage.removeItem("uid")

		return auth.signOut()
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			let res = await axios.get("http://localhost:8080/api/account/get_user", { params: { "uid": user.uid } })
			setCurrentUser(res.data.user)
		})

		return unsubscribe
	}, [])

	const value = {
		"currentUser": currentUser,
		"setUser": setUser,
		"login": login,
		"signup": signup,
		"logout": logout,
	}
	return value
}  
