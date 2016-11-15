import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Tribute from '../../src/Tribute';

const props = {
  options: {
    values: [{key: 'Test', value: 'test'}],
  },
};

describe('<Tribute />', () => {
  it('renders it\'s children', () => {
    const wrapper = mount(
      <Tribute {...props}>
        <textarea id="testTextArea"></textarea>
      </Tribute>
    );

    expect(wrapper.find('#testTextArea')).to.be.length(1);
  });

  it('attaches tribute to it\'s valid children', () => {
    const wrapper = mount(
      <Tribute {...props}>
        <textarea id="testTextArea"></textarea>
      </Tribute>
    );

    expect(wrapper.html()).to.contain('data-tribute');
  });

  it('cannot attach tribute to invalid children', () => {
    expect(mount.bind(this,
      <Tribute {...props}>
        <div>Test</div>
      </Tribute>
    )).to.throw('[Tribute] Cannot bind to DIV');
  });
});
