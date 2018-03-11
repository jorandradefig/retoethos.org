import React, { Component } from 'react'
import './Description.css'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'
import recurso3 from '../assets/Recurso2@3x.svg'

class Description extends Component {
  render() {
    return (
      <div id="participa" className="Description">
        <Container className="px-5 py-5">
          <Row className="px-0 px-lg-5 py-5">
            <Col xs="12">
              <p className="text-center solution">Idear una herramienta que permita detectar posibles irregularidades y malas prácticas administrativas a partir del análisis de la información obtenida de bases de datos abiertos dentro del sector energético.</p>
            </Col>
          </Row>
          <Row className="px-0 px-lg-5">
            <Col xs="12" lg="7">
              <a href="https://docs.google.com/document/d/1by8jK4GXsJL0lCcvc28BelhS0BtH6I0ImselfZ7A-PI/edit" target="_blank" rel="noopener noreferrer">
                <p className="mb-4 download"><span className="greater">&lt;</span> DESCARGA LA CONVOCATORIA <span className="lesser">&gt;</span></p>
              </a>
              <a href="https://drive.google.com/file/d/1_ffcGjtcoSqPmLuJGnfOJCzRoeH_1sNp/view" target="_blank" rel="noopener noreferrer">
                <p className="mb-5 download"><span className="greater">&lt;</span> DESCARGA EL LISTADO DE BASES DE DATOS <span className="lesser">&gt;</span></p>
              </a>
              <a href="https://codeandomexico.typeform.com/to/l1FJ2Q" target="_blank" rel="noopener noreferrer">
                <Button color="primary" size="lg" block>MANDA TU PROPUESTA</Button>
              </a>
            </Col>
            <Col xs="12" lg="5" className="d-flex justify-content-center align-items-center">
              <img className="img-fluid mt-5 mt-lg-0" src={recurso3} alt="recurso3" />
            </Col>
          </Row>
          <Row className="px-0 px-lg-5 py-5">
            <Col xs="12">
              <p className="text-center title mt-3">¡EL GANADOR OBTENDRÁ $120,000 MXN!</p>
              <p className="text-center text">La persona o el equipo ganador, tendrá que trabajar durante un mes en colaboración con Ethos para entregar un prototipo funcional.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Description
