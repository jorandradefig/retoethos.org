import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import Footer from './Footer'
import Faq from './Faq'
import Participa from './Participa'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Participa />
        <Faq />
        <Footer />
      </div>
     
    )
  }
}

export default App
