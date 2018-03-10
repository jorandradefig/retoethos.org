import React, { Component } from 'react'
import './Description.css'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'


import recurso1 from '../assets/Estudiantes.svg'

import recurso2 from '../assets/Convocatoria.svg'
import recurso3 from '../assets/Recurso2@3x.svg'

import recurso4 from '../assets/ganador.svg'
import recurso5 from '../assets/equipo.svg'

class Description extends Component {
  render() {
    return (
      <div className="Description">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col  xs="col-md-12 " lg="col-md-12 ">
              <img src={recurso1} />
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <Row>
            <Col  xs="col-sm-12 " lg="col-md-6">
                  <Row>
                    <Col className="d-flex justify-content-center" xs="12 " lg="12">
                      <img  src={recurso2} />
                    </Col>
                    <Col className="d-flex justify-content-center" xs="12 " lg="12">
                      <Button className="buttonInvi"  block>MANDA TU PROPUESTA</Button>
                    </Col>
                  </Row>
            </Col>
              
            <Col xs="col-sm-12 " lg="col-md-6 ">
              <img className="teclado" src={recurso3} />
            </Col>
            
          </Row>
        </Container>
        <Container className="ganador">
          <Row >
            <Col className="d-flex justify-content-center align-items-center" xs="12 " lg="12">
              <img className="ganador" src={recurso4} />
            </Col >
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center" xs="12 " lg="12">
              <img src={recurso5} />
            </Col>
          </Row> 
        </Container>
        


      </div>
    )
  }
}

export default Description
