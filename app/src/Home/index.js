import React, { Component } from 'react'
import styled from 'styled-components'
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
    DropdownItem } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container fluid>
            <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Ethos</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="">Hackatón</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Options
                    </DropdownToggle>
                    <DropdownMenu >
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
            </Navbar>
        </Container>
      </div>
    )
  }
}

export default Home