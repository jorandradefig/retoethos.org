import React, { Component } from 'react'
import './Footer.css'
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
import { Link } from 'react-scroll'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/fontawesome-free-brands'

class Footer extends Component {
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
      <div className="Footer">
        <Navbar className="navbar px-3 px-lg-5" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink className="mr-0 mr-lg-5" href="https://docs.google.com/document/d/1by8jK4GXsJL0lCcvc28BelhS0BtH6I0ImselfZ7A-PI/edit" target="_blank">BASES</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar direction="up">
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
                <NavLink>
                  <Link to="faq" spy={true} smooth={true} duration={500}>
                    FAQ
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-4">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </NavItem>
              <NavItem className="mr-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Footer
