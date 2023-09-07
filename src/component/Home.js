import React from 'react'
import About from './About'
import Services from './Services'
import Process from './Process'
import Progressbar from './Progressbar'
import Technologies from './Technologies'
import Footer from './Footer'
import Slider from './Slider'
import Efforts from './Efforts'
import Clents from './Clents'

const Home = () => {
  return (
    <div>
      <Slider/>
       <About/>
      <Services/>
      <Process/>
      <Efforts/>
      <Clents/>
      <Progressbar/>
      <Technologies/>
      <Footer/>
    </div>
  )
}

export default Home
