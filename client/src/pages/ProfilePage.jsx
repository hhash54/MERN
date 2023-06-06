import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate,Link, useParams } from "react-router-dom";
import axios from "axios";
import {useState} from 'react';
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage(){
    const[redirect,setRedirect] =useState(null);
    let{subpage}= useParams();
   if(subpage===undefined){
    subpage='profile';
   }
   
   async function logout(){
    await axios.post('/logout')
    setRedirect('/');
    setUser(null);
   }
    const {ready,user,setUser}=useContext(UserContext);
    
    if(!ready){
        return 'LOADING';
    }
    if(ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }
   
   console.log(subpage);
  
   if(redirect){
        return <Navigate to ={redirect}/>
   }
   return (
    <div>
        <AccountNav></AccountNav>
        
        {subpage=== 'profile' &&(
            <div className="text-center max-w-lg mx-auto">
                Logged in as {user.name} ({user.email})<br />
                <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
            </div>
        )}
        {subpage=== 'places' &&(
            <PlacesPage/>
        )}

    </div>
);


}