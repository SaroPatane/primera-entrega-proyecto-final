import React from 'react'
import Anuncios from '../components/Anuncios'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Anuncios/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home