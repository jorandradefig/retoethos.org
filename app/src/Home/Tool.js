import React, { Component } from 'react'
import './Tool.css'
import {
  Container,
  Row,
  Col,
  div
} from 'reactstrap'

import recurso2 from '../assets/Recurso1@3x.svg'
import recurso3 from '../assets/herramienta.svg'
import recurso4 from '../assets/puntos.svg'
import recurso5 from '../assets/fecha.svg'

class Tool extends Component {
  render() {
    return (
      <div className="Tool py-5">
        <Container className="d-flex justify-content-center align-items-center px-5">
          <Row>
            <Col xs="12" lg="4" className="d-flex justify-content-center align-items-center px-5">
                <img className="img-fluid" src={recurso2} />
            </Col>
            <Col xs="12" lg="8" className="d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                <p className="text-center idea">Idear una herramienta que permita detectar posibles irregularidades y malas prácticas administrativas a partir del análisis de la información obtenida de bases de datos abiertos dentro del sector energético.</p>
            </Col>
          </Row>
        </Container>
        <Container className=" d-flex justify-content-center align-items-center">
            
            <Row>
              <Col xs="col-md-12 " lg="col-md-12">
                  <img className="Puntos align-self-center" src={recurso4} />
              </Col>
            </Row>
        </Container>
        <Container className="Fecha d-flex justify-content-center align-items-center">
            
            <Row>
              <Col  xs="col-md-12 " lg="col-md-12">
                  <img className="align-self-center" src={recurso5} />
              </Col>
            </Row>
        </Container>
        
      </div>
    )
  }
}

export default Tool
