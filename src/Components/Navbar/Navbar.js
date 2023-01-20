import React from 'react'
import "./Navbar.css";
import { useState,useEffect } from 'react';
import axios from 'axios';

function Navbar() {
  const[user,setuser]=useState([])
  
  useEffect(() => {
    axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=2cbb85e8')
    .then(res => setuser(res.data))
    
    console.log(user.Title);
  } ,[])
  return (
    <div className='navbar' >
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/74/Prime_Hydration_logo.png'/>
       
        <img className='avatar' src='https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png'/>
        <input  type="text" placeholder='search'  className='search'></input><button className='but'>search</button>
        <ul>
           
           <li>{user.Title}</li>
          
        </ul>
    </div>
  )
}

export default Navbar
