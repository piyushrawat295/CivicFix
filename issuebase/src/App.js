import React from 'react'
import About from './Components/About Section/About'
import Hero from './Components/Hero Section/Hero'
import Navbar from './Components/Navbar/Navbar'
import Partners from './Components/Partners/Partners'
import FAQs from './Components/FAQs/FAQs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Partners/>
      {/* <Contact/> */}
      <FAQs/>
    </div>
  )
}

export default App
