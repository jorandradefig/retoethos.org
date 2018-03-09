import React, { Component } from 'react'

import {
  Container
} from 'reactstrap'
import Descripcion from './Descripcion.js'

class Participa extends Component {
  render() {
    return (
      <div className="Participa">
        <Container fluid className="p-0">
          <Descripcion />
        </Container>
      </div>
    )
  }
}

export default Participa
