/* pages/index.js */
import { useEffect, useState } from 'react'
import { client, exploreProfiles } from '../api'
import Link from 'next/link'
import LogIn from './Login'
  import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import SignUp from './SignUp';
import Analytics from './Analytics';
import Feed from './Feed';

export default function Home() {
  
  return (
    <Feed /> 
    
  )
}