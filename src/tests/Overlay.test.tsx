import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Overlay from '../components/Overlay';

describe('<Overlay />', () => {
  it('should initialize without crash and match snapshot', () => {
    const exampleText = 'TEST STRING';
    const wrapper: ShallowWrapper = shallow(
      <Overlay displayText={exampleText} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe(exampleText);
  });
});
