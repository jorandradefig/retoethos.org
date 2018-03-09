import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'
import recurso2 from '../assets/Recurso2@3x.svg'
import reto from '../assets/_RETO_.svg'
import hidrocarburos from '../assets/CORRUPCION_EN_EL_SECTOR_DE_HIDROCARBUROS.svg'

class Propuesta extends Component {
  render() {
    return (
      <div className="Propuesta">
        <Container className="py-5">
          <Row>
            <Col xs="12" lg="6">
              <Container className="">
                <Row>
                    <Col xs="12" lg="12">
                        <p>DESCARGA LA CONVOCATORIA</p>
                    </Col>
                    <Col xs="12" lg="12">
                        <p>DESCARGA EL LISTADO DE BASES DE DATOS</p>
                    </Col>
                    <Col xs="12" lg="12">
                        <Button color="primary" size="lg" block>Block level button</Button>
                    </Col>
                </Row>
              </Container>
            </Col>
            <Col xs="12" lg="6" className="d-flex flex-column justify-content-center align-items-center">
                <img className="img-fluid" src={recurso2} />
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Propuesta
