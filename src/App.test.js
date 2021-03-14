import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Header from './Header/Header';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render <Header /> once', () => {
    console.log(wrapper.debug());
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('should show title of application', () => {
    expect(wrapper.find("h1").text()).toContain("User DATA MANAGEMENT")
  });

  it('should render two div', () => {
    expect(wrapper.find('div')).toHaveLength(2);
  });

  it('should have one switch route', () => {
    expect(wrapper.find('Switch')).toHaveLength(1);
  });

  it('should have five routes', () => {
    expect(wrapper.find('Route')).toHaveLength(5);
  });

  
});