import React from "react";
import { useEffect, useState } from "react";
import avatar from "../components/avatar.jpg";
import MetricBlock from "../components/MetricBlock";
import SideBar from "../components/SideBar";
import { Pie } from '@ant-design/plots';

import { useLazyQuery, useMutation } from "@apollo/client";
// import { useAccount, useSigner, useDisconnect } from 'wagmi'
import { useRouter } from 'next/router'
import { setTokens } from "./auth";
import { Web3ReactProvider } from '@web3-react/core';
import logo from "./logo.png";
import { ethers,utils } from "ethers";

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'

import LandingPage from './landing'

const APIURL = 'https://api-mumbai.lens.dev/';
const apolloClient= new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
    })

export default function Profile(){
    const [user, setUser]=useState({});
    const [bio, setBio]=useState("");
    const [posts, setPosts]=useState([1,2,3]);
    const [image, setImage]=useState("");
    const [followed, setFollowed]=useState(false);


    const [haveMetamask, sethaveMetamask] = useState(true);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    
    

    const connectWallet = async () => {
        const { ethereum } = window;
        try{
            if (!ethereum) {
                sethaveMetamask(false);
            }
            
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            
            let balance = await provider.getBalance(accounts[0]);
            let bal = ethers.utils.formatEther(balance);
            
            setAccountAddress(accounts[0]);
            setAccountBalance(bal);
            setIsConnected(true);
            getChallenge(accounts[0],provider);
        } catch (error) {
            setIsConnected(false);
        }
    };
    const GET_CHALLENGE = `
        query($request: ChallengeRequest!) {
            challenge(request: $request) { text }
        }
    `;
    const getChallenge = async (accountAddress: string, provider:any) => {
        const response = await apolloClient.query({
         query: gql(GET_CHALLENGE),
         variables: {
           request: {
              address: accountAddress
           },
         },
       })
       const chall= response['data']['challenge']['text']
       console.log('Challenge: ',chall );
       // const sign  = useSigner.signMessage(response)
       
        const signer = provider.getSigner();
        const hexMessage = utils.hexlify(utils.toUtf8Bytes(chall))
        const signature = signer.signMessage(hexMessage).then(s=>console.log(s));

        const success = await authenticate(accountAddress,signature).then
          (()=>router.push("/profile"));
    }

    const AUTHENTICATION = `
        mutation($request: SignedAuthChallenge!) { 
            authenticate(request: $request) {
            accessToken
            refreshToken
            }
        }`;
    const authenticate = (address:any, signature:any) => {
      console.log(address+" "+signature);
      
        const ans = apolloClient.mutate({
            mutation: gql(AUTHENTICATION),
            variables: {
            request: {
                address,
                signature,
            },
            }
        })
        console.log("authenticate "+ans);
        return ans;
    }
    
    return (<div id="animatedBackground" className="h-screen w-full flex items-center  justify-center bg-one ">
    <div className="bg-three h-[40%] font-extrabold justify-center flex items-center rounded-3xl hover:-translate-y-10 :hover transition duration-700 ease-out shadow-xl hover:shadow-zinc-100 w-[60%]">
      <button onClick={connectWallet} className="text-four hover:text-four font-mono scale-[5]">WELCOME</button>
  
    </div>
  </div>)
};