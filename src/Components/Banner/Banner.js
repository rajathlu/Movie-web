import React from 'react'
import './Banner.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {imageUrl} from '../../Constants/Constants'


function Banner() {
  const[film,setfilm]=useState()

  useEffect(() => {
   axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=2cbb85e8').then((res)=>{
    
    setfilm(res.data)
   })
  }, [])
  return (
    
    <div
    style={{backgroundImage:`url(${film ? film.Poster: ""})`}}
     className='banner' >
      
      <div className='content'>
        <h1>TRENDING</h1>
        
        <h1 className='title'>{film ? film.Title : ""}</h1>
        <div className='banner_butttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
        </div>
        <h1 className='discption'> {film ? film.Plot : ""}</h1>
      </div>
      <div className='fade_bottom'>

      </div>
      

    </div>
  )
}

export default Banner
