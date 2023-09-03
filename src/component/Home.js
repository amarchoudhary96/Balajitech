import React from 'react'
import About from './About'
import Services from './Services'
import Process from './Process'
import Progressbar from './Progressbar'
import Technologies from './Technologies'
import Footer from './Footer'
import Slider from './Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
       <About/>
      <Services/>
      <Process/>
      <Progressbar/>
      <Technologies/>
      <Footer/>
    </div>
  )
}

export default Home
