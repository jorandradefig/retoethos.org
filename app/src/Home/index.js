import React, { Component } from 'react'
import styled from 'styled-components'
import './Home.css'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import Header from './Header.js'

class Home extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="Home">
        <Container fluid>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">EL RETO</NavbarBrand>
            <NavbarBrand href="/">¡PARTICIPA!</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">BASES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">RECURSOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">FAQ</NavLink>
              </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Header />
        </Container>
      </div>
    )
  }
}

export default Home
