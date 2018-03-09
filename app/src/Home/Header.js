import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import recurso1 from '../assets/Recurso1@10x.svg'
import reto from '../assets/_RETO_.svg'
import hidrocarburos from '../assets/CORRUPCION_EN_EL_SECTOR_DE_HIDROCARBUROS.svg'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Container className="py-5">
          <Row>
            <Col xs="12" lg="6">
              <img className="img-fluid" src={recurso1} />
            </Col>
            <Col xs="12" lg="6" className="d-flex flex-column justify-content-center align-items-center">
              <img className="mb-3 img-fluid" src={reto} />
              <img className="mt-3 img-fluid" src={hidrocarburos} />
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Header
