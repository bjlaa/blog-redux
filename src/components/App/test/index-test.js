import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
// import sinon from 'sinon';

import App from '../';

describe('<App />', () => {
  it('should render its children', () => {
    const wrapper = shallow(<App />);
    const message = wrapper.find('.test');

    expect(message.length).to.equal(1);
  });
});
