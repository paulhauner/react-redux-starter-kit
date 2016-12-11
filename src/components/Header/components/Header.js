import React from 'react'
import { Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import './Header.scss'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let right = <NavItem eventKey={2} href="" >{ this.props.randomString }</NavItem>

    return (
      <Navbar inverse fluid staticTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="" onClick={ this.props.home } >React Redux</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="" onClick={this.props.counter}>Counter</NavItem>
          </Nav>
          <Nav pullRight>
            {right}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
