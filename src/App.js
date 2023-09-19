import React from 'react'

import {Header,Navbar, About, Work, Footer} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>  
      <Navbar className="navbar" />
      <Header/>
      <About/> 
      <Work/> 
      <Footer/>      
    </div>
  )
}

export default App 