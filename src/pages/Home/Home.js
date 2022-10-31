import React from 'react'

import './Home.css';
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"
import sitting from "../../assets/sitting.jpg"
import {  Routes, Route, Link} from "react-router-dom"

function Home() {
  return (
    <body id="mainbody">

    <div className='dbody'>
    <h1 className='title1'>Nust Workload System</h1>
    <div className='container1'>
      <Link to="/teaching">
      <div className='card1'>
        <img src={img1}/>
       <div className='intro1'>
          <h1>Teaching</h1>
        <p>lCulpa culpa aute voluptate nostrud velit do proident reprehenderit amet et eu nulla cillum excepteur. In mollit occaecat sit occaecat minim fugiat nisi pariatur. Minim id dolore aute quis incididunt sunt ipsum dolore. Incididunt aliqua nulla anim minim enim adipisicing nulla duis occaecat. Est laboris in aliqua aute quis sint ex qui quis. Deserunt ex sunt enim proident fugiat sunt consectetur dolor esse nulla adipisicing quis.</p>
      
       </div>
        
      </div>
      </Link>
      <Link to="/community">
      <div className='card1'>
        <img src={img2}/>
       <div className='intro1'>
          <h1>Community</h1>
        <p>lCulpa culpa aute voluptate nostrud velit do proident reprehenderit amet et eu nulla cillum excepteur. In mollit occaecat sit occaecat minim fugiat nisi pariatur. Minim id dolore aute quis incididunt sunt ipsum dolore. Incididunt aliqua nulla anim minim enim adipisicing nulla d</p>
      
       </div>
        
      </div>
      </Link>

      <Link to="/researchcourse">
      
      <div className='card1'>
        <img src={img3}/>
       
        <div className='intro1'>
          <h1>Research</h1>
        <p><span>lCulpa</span>  culpa aute voluptate nostrud velit do proident reprehenderit amet et eu nulla cillum excepteur. In mollit occaecat sit occaecat minim fugiat nisi pariatur. Minim id dolore aute quis incididunt sunt ipsum dolore. Incididunt aliqua nulla anim minim enim adipisic</p>
      
       </div>
      </div>
      </Link>
      <Link to="/admin">

      <div className='card1'>
        <img src={sitting}/>
       
        <div className='intro1'>
          <h1>Admin</h1>
        <p><span>lCulpa</span>  culpa aute voluptate nostrud velit do proident reprehenderit amet et eu nulla cillum excepteur. In mollit occaecat sit occaecat minim fugiat nisi pariatur. Minim id dolore aute quis incididunt sunt ipsum dolore. Incididunt aliqua nulla anim minim enim adipisic</p>
      
       </div>
      </div>
      </Link>

      
    </div>

     </div>

    </body>
  )
}

export default Home