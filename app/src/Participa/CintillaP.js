import React, { Component } from 'react'
import './CintillaP.css'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class CintillaP extends Component {
  render() {
    return (
      <div className="CintillaP">
        <Container className="py-5">
          <Row>
            <Col xs="12" lg="12" className="mx-auto">
                
                <h1> &lt; PARTICIPA &gt; </h1>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default CintillaP
