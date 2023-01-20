
import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className='App'>
  
  <Navbar/>
  <Banner/>
  <Post title='ACTION'/>
  <Post title='SCI-FI'/>
  <Post title='HORROR'/>

    </div>
    
    
  );
}

export default App;
