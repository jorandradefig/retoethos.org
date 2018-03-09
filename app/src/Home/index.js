import React, { Component } from 'react'
import './Home.css'
import {
  Container
} from 'reactstrap'
import Menu from './Menu.js'
import Header from './Header.js'
import Banner from './Banner.js'
import Description from './Description.js'
import Invitation from './Invitation.js'
import Faq from './Faq.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container fluid className="p-0">
          <Menu />
          <Header />
          <Banner />
          <Description />
          <Banner />
          <Invitation />
          <Banner />
          <Faq />
          <Menu />
        </Container>
      </div>
    )
  }
}

export default Home
