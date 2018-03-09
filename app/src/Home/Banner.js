import React, { Component } from 'react'
import './Banner.css'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <Container className="py-5">
          <Row>
            <Col xs="12" lg="12" className="mx-auto">
                
                <h1> &lt; Preguntas Frecuentes &gt; </h1>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Banner
