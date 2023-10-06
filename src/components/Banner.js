import React from 'react'
import Image from '../assets/logo.png'
import '../styles/banner.css'
const Banner = () => {
  return (
    <div className='banner'>
       <img  src={Image}></img> 
       <h1>La maison jungle</h1>
    </div>
  )
}

export default Banner