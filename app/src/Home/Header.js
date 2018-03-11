import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import recurso1 from '../assets/Recurso1@10x.svg'
import reto from '../assets/_RETO_.svg'
import hidrocarburos from '../assets/CORRUPCION_EN_EL_SECTOR_DE_HIDROCARBUROS.svg'
import embajada from '../assets/logo-embajada-mx.svg'
import ethos from '../assets/ethos.svg'
import cmx from '../assets/cmx_logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Container className="py-5 px-5">
          <Row className="px-0 px-lg-5">
            <Col xs="12" lg="6" className="d-flex justify-content-center align-items-center mb-5 mb-lg-0">
              <img className="img-fluid" src={recurso1} alt="recurso1" />
            </Col>
            <Col xs="12" lg="6" className="d-flex flex-column justify-content-center align-items-center mt-5 mt-lg-0">
              <img className="mb-3 img-fluid" src={reto} alt="reto" />
              <img className="mt-3 img-fluid" src={hidrocarburos} alt="hidrocarburos" />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs="12" lg="7" className="pt-5 d-flex flex-column flex-lg-row mt-5 mt-lg-0">
              <Col xs="12" lg="4" className="d-flex justify-content-center align-items-center">
                <img className="img-fluid" src={embajada} alt="embajada" />
              </Col>
              <Col xs="12" lg="4" className="d-flex justify-content-center align-items-center mt-4 mt-lg-0">
                <img className="img-fluid" src={ethos} alt="ethos" />
              </Col>
              <Col xs="12" lg="4" className="d-flex justify-content-center align-items-center mt-4 mt-lg-0">
                <img className="img-fluid" src={cmx} alt="cmx" />
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Header
