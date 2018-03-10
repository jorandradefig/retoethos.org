import React, { Component } from 'react'
import './Home.css'
import {
  Container
} from 'reactstrap'
import Menu from './Menu.js'
import Header from './Header.js'
import Banner from './Banner.js'
import Description from './Description.js'
import Faq from './Faq.js'
import Herramienta from './Herramienta.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container fluid className="p-0">
          <Menu />
          <Header />
          <Banner data={{text: 'EL RETO', backgroundColor: '#009ADE'}} />
          <Herramienta />
          <Banner data={{text: 'PARTICIPA', backgroundColor: '#F96E36'}} />
          <Description />
          <Banner data={{text: 'PREGUNTAS FRECUENTES', backgroundColor: '#344154'}} />
          <Faq />
          <Menu />
        </Container>
      </div>
    )
  }
}

export default Home
