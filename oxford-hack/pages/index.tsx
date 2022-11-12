/* pages/index.js */
import { useEffect, useState } from 'react'
import { client, exploreProfiles } from '../api'
import Link from 'next/link'
import LogIn from './Login'
  import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import SignUp from './SignUp';

export default function Home() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/log-in" element={<LogIn /> } />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}