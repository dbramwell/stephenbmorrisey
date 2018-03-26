import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hash: '#home'
    }
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
              Stephen B. Morrisey
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.props.navItems.map((item, index) => {
                return <NavItem active={this.state.hash.indexOf(item) > -1} key={index} onSelect={() => window.location.hash = `#${item}`}>{item}</NavItem>
              })}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle />
        </Navbar>
      </div>
    );
  }
}

Menu.defaultProps = {
  navItems: []
}