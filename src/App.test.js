import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains Menu when created', () => {
  const app = shallow(<App />);
  const menu = app.find('Menu');
  expect(menu.length).toEqual(1);
});
