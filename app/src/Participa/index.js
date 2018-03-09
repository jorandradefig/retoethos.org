import React, { Component } from 'react'

import {
  Container
} from 'reactstrap'
import Descripcion from './Descripcion.js'
import Propuesta from './Propuesta.js'
import Ganador from './Ganador.js'
import CintillaP from './CintillaP.js'

class Participa extends Component {
  render() {
    return (
      <div className="Participa">
        <Container fluid className="p-0">
          <CintillaP />
          <Descripcion />
          <Propuesta />
          <Ganador /> 
        </Container>
      </div>
    )
  }
}

export default Participa
