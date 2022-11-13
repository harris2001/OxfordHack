/* pages/index.js */
import { useEffect, useState } from 'react'
import { client, exploreProfiles } from '../api'
import { useRouter } from 'next/router'
import Link from 'next/link'
  import { BrowserRouter as Router, Route }
    from "react-router-dom";
import SignUp from './signup';
import Analytics from './analytics';
import Feed from './feed';
import React from 'react';

import LandingPage from './landing'

export default function Home() {

  const router=useRouter();

  return (
    <LandingPage/>
  );
    }
