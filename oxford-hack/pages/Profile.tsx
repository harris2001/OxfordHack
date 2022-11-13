// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { useLazyQuery, useMutation } from "@apollo/client";
// import { useAccount, useSigner, useDisconnect } from 'wagmi'
// import { useRouter } from 'next/router'
// import { setTokens } from "./auth";
// import { useDispatch, useSelector } from 'react-redux'
// import { GET_CHALLENGE,AUTHENTICATION } from "./api/authorize";
// import logo from "./logo.png";
// import { ethers } from "ethers";

// export default function Profile() {
//     const [haveMetamask, sethaveMetamask] = useState(true);
//     const [accountAddress, setAccountAddress] = useState('');
//     const [accountBalance, setAccountBalance] = useState('');
//     const [isConnected, setIsConnected] = useState(false);
    
//     const  { address }  = useAccount();
//     const selectedProfile = useSelector((state: any) => state.user.selectedProfile)
//     const auth = useSelector((state: any) => state.auth)
//     const dispatch = useDispatch()

//     const { data: signer } = useSigner()

//     const [ getChallenge ] = useLazyQuery<any, any>(GET_CHALLENGE, {
//         fetchPolicy: 'network-only'
//     })
//     const [ postAuthentication ] = useMutation<any,any>(AUTHENTICATION)


//     const { disconnect } = useDisconnect()

//     useEffect(() => {
//         if(address && signer && !auth.accessToken ) {
//             getChallenge({ variables: { request: { address } }}).then(challengeData => {
//                 const text = challengeData.data?.challenge.text
//                 if(text) {
//                     signer.signMessage(text).then((signed: any) => {
//                         postAuthentication({ variables: { request: { address, signature: signed }}}).then((authenticationData: { data: { authenticate: any; }; }) => {
//                             const jwtTokens = authenticationData.data?.authenticate
//                             if(jwtTokens) {
//                                 dispatch(setTokens(jwtTokens))
//                             }
//                         })
//                     }).catch(() => disconnect())
//                 }
//             }).catch(() => disconnect())
//         }
//     }, [ address, signer, getChallenge, disconnect, dispatch, postAuthentication, auth ])




//     // const { data: profilesData } = useLensProfiles()

//     // const handleProfileSelected = (profile: User) => {
//     //     dispatch(setSelectedProfile(profile))
//     //     setShow(false);
//     // }
    
//     // const router = useRouter()
//     // useEffect(() => {
//     //     if(auth.accessToken && !selectedProfile && profilesData) {
//     //         sethaveMetamask(true)
//     //     }
//     // }, [auth, profilesData, selectedProfile])



//     const connectWallet = async () => {        
//         // CHALLENGE().then((challenge) => {
//         //     window.ethereum.request({
//         //         method: 'eth_signTypedData_v4',
//         //         params: [accountAddress, challenge],
//         //         from: accountAddress,
//         //     }).then((signature) => {
//         //         console.log(signature);
//         //     });
//         // });
//         // const { ethereum } = window;
//         // try{
//         //     if (!ethereum) {
//         //         sethaveMetamask(false);
//         //     }
            
//         //     const accounts = await ethereum.request({
//         //         method: 'eth_requestAccounts',
//         //     });
//         //     const provider = new ethers.providers.Web3Provider(window.ethereum);
            
//         //     let balance = await provider.getBalance(accounts[0]);
//         //     let bal = ethers.utils.formatEther(balance);
            
//         //     setAccountAddress(accounts[0]);
//         //     setAccountBalance(bal);
//         //     setIsConnected(true);
//         // } catch (error) {
//         //     setIsConnected(false);
//         // }
//     };

import { useEffect, useState } from 'react'
import { useLazyQuery, useMutation } from "@apollo/client";
// import { useAccount, useSigner, useDisconnect } from 'wagmi'
import { useRouter } from 'next/router'
import { setTokens } from "./auth";
import { Web3ReactProvider } from '@web3-react/core';
import logo from "./logo.png";
import { ethers,utils } from "ethers";


import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'

const APIURL = 'https://api-mumbai.lens.dev/';
const apolloClient= new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
    })
    
export default function Profile() {

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
        console.log("getChallenge "+accountAddress);
        const response = await apolloClient.query({
         query: gql(GET_CHALLENGE),
         variables: {
           request: {
              address: accountAddress
           },
         },
       })
       console.log('Lens example data: ', response);
    //    const sign  = useSigner.signMessage(response)
       
        const signer = provider.getSigner();
        const hexMessage = utils.hexlify(utils.toUtf8Bytes(response))
        const signature = await signer.signMessage(hexMessage)
       authenticate(accountAddress,signature);
    }

    const AUTHENTICATION = `
        mutation($request: SignedAuthChallenge!) { 
            authenticate(request: $request) {
            accessToken
            refreshToken
            }
        }`;
    const authenticate = (address:any, signature:any) => {
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

    return ( <div className="App">
     <header className="App-header">
       {haveMetamask ? (
        <div className="App-header">
          {isConnected ? (
            <div className="card">
              <div className="card-row">
                <h3>Wallet Address:</h3>
                <p>
                  {accountAddress}
                </p>
              </div>
              <div className="card-row">
                <h3>Wallet Balance:</h3>
                <p>{accountBalance}</p>
              </div>
            </div>
          ) : (
            <img src={logo.src} className="App-logo" alt="logo" />
          )}
          {isConnected ? (
            <p className="info">🎉 Connected Successfully</p>
          ) : (
            <button className="btn" onClick={connectWallet}>
              Connect
            </button>
          )}
        </div>
      ) : (
        <p>Please Install MataMask</p>
      )}
    </header>
  </div>
);
}