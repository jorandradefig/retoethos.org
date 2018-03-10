import React, { Component } from 'react'
import './Herramienta.css'
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

class Herramienta extends Component {
  render() {
    return (
      <div className="Herramienta">
        <Container className="d-flex justify-content-center align-items-center">
            
          <Row>
            <Col className="align-self-start" xs="col-sm-12" lg="col-md-6">
                <img className="Foco align-self-center" src={recurso2} />
            </Col>
            <Col xs="col-sm-12" lg="col-md-6">
                <img className="Herramienta_idea d-flex justify-content-center align-items-center" src={recurso3} />
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

export default Herramienta
