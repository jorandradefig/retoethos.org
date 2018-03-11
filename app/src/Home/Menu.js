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
        <Navbar className="navbar px-3 px-lg-5" light expand="md">
          <NavbarBrand className="text" href="#reto">EL RETO</NavbarBrand>
          <NavbarBrand className="ml-0 ml-lg-5 text" href="#participa">¡PARTICIPA!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="mr-0 mr-lg-5" href="https://docs.google.com/document/d/1by8jK4GXsJL0lCcvc28BelhS0BtH6I0ImselfZ7A-PI/edit" target="_blank">BASES</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-0 mr-lg-5" nav caret>
                  RECURSOS
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="https://drive.google.com/open?id=1evJgsY8axXOpWujbDPgm2n5TZhMTc2ae" target="_blank">
                    DATASETS
                  </DropdownItem>
                  <DropdownItem href="https://drive.google.com/open?id=1_ffcGjtcoSqPmLuJGnfOJCzRoeH_1sNp" target="_blank">
                    CLASIFICACIÓN DE DATASETS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            <NavItem>
              <NavLink>FAQ</NavLink>
            </NavItem>
            </Nav> 
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Menu
