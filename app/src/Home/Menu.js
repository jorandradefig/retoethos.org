import React, { Component } from 'react'
import './Menu.css'
import {
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
  DropdownItem
} from 'reactstrap'

class Menu extends Component {
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
      <div className="Menu">
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
      </div>
    )
  }
}

export default Menu
