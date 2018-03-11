import React, { Component } from 'react'
import './Tool.css'
import {
  Container,
  Row,
  Col,
  div
} from 'reactstrap'
import recurso2 from '../assets/Recurso1@3x.svg'

class Tool extends Component {
  render() {
    return (
      <div className="Tool py-5">
        <Container className="d-flex flex-column justify-content-center align-items-center px-5">
          <Row className="px-0 px-lg-5">
            <Col xs="12" lg="4" className="d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={recurso2} alt="recurso2" />
            </Col>
            <Col xs="12" lg="8" className="d-flex justify-content-center align-items-center mt-5 mt-lg-0">
              <p className="text-center idea">Idear una herramienta que permita detectar posibles irregularidades y malas prácticas administrativas a partir del análisis de la información obtenida de bases de datos abiertos dentro del sector energético.</p>
            </Col>
          </Row>
          <Row className="px-0 px-lg-5 mt-5">
            <Col xs="col-md-12 " lg="col-md-12" className="px-0 px-lg-5 features">
              <p className="mb-4">La herramienta deberá:</p>
              <p>
                <span className="greater"> &gt; </span> Identificar las áreas de riesgo más susceptibles a la corrupción en el sector.
              </p>
              <p>
                <span className="greater"> &gt; </span> Generar conocimiento útil sobre actos de corrupción en el sector, mediante el análisis de datos abiertos.
              </p>
              <p>
                <span className="greater"> &gt; </span> Integrar un sistema de alertas con el objetivo de facilitar la detección de posibles irregularidades o malas prácticas.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Tool
