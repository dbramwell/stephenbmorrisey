import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains Navbar when created', () => {
  const app = mount(<App />);
  const navbar = app.find('Navbar');
  expect(navbar.length).toEqual(1);
});
