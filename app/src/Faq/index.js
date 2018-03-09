import React, { Component } from 'react'
import './Faq.css'
import {
  Container
} from 'reactstrap'
import Pregunta from './Pregunta.js'
import Cintilla from './Cintilla.js'

class Faq extends Component {
  render() {
    return (
      <div className="Faq">
        <Container fluid className="p-0">
          <Cintilla />
          <Pregunta />
        </Container>
      </div>
    )
  }
}

export default Faq
