import React, { Component } from 'react'
import './Footer.css'
import {
  Container
} from 'reactstrap'
import Menu from './Menu.js'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Container fluid className="p-0">
          <Menu />
        </Container>
      </div>
    )
  }
}

export default Footer
