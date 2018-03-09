import React, { Component } from 'react'
import './Banner.css'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class Banner extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const text = this.props.data.text
    const backgroundColor = this.props.data.backgroundColor

    return (
      <div className="Banner d-flex justify-content-center align-items-center" style={{backgroundColor: backgroundColor}}>
        <Container fluid>
          <Row>
            <Col xs="12" lg="12" className="mx-auto">               
                <h1> &lt; {text} &gt; </h1>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Banner
