import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import helpers from '../Helpers';

export default class Menu extends Component {

  componentDidMount() {
    window.onhashchange = () => {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className='Menu'>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand active={window.location.hash.indexOf('home') > -1}>
              <a href='#home'>Stephen B. Morrisey</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.props.navItems.map((header, index) => {
                const hash = helpers.headerToHash(header);
                return <NavItem active={window.location.hash.indexOf(hash) > -1} key={index} href={`#${hash}`}>{header}</NavItem>
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

Menu.defaultProps = {
  navItems: []
}