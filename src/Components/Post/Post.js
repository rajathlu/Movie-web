import React from 'react'
import './Post.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
function Post(props) {
  const[film,setfilm]=useState([])
useEffect(()=>{
  axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=2cbb85e8').then(res=>{
    console.log(res.data);
    setfilm(res.data)
  })
})
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
        <img className='poster' alt='poster' src={film.Poster}/>
     
      </div>
    </div>
  )
}

export default Post
