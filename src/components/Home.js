import React from 'react'
import "./Home.css"

const Home = ({imageSrc}) => {
  return (
    <div className='home'>
        <img src={imageSrc} alt='travel' className='home_image'/>
        <h1 className='home_title'>Travel made simple.</h1>
    </div>
  )
}

export default Home