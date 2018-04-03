import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Helpers from '../Helpers';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hash: '#home'
    }
    this.helpers = new Helpers();
    
  }

  componentDidMount() {
    const that = this;
    window.onhashchange = function () { that.setState({ hash: window.location.hash }) };
  }

  render() {
    return (
      <div className='Menu'>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#home'>Stephen B. Morrisey</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.props.navItems.map((header, index) => {
                const hash = this.helpers.headerToHash(header);
                return <NavItem active={this.state.hash.indexOf(hash) > -1} key={index} onSelect={() => window.location.hash = `#${hash}`}>{header}</NavItem>
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