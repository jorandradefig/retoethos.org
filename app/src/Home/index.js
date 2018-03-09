import React, { Component } from 'react'
import './Home.css'
import {
  Container
} from 'reactstrap'
import Menu from './Menu.js'
import Header from './Header.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container fluid className="p-0">
          <Menu />
          <Header />
        </Container>
      </div>
    )
  }
}

export default Home
