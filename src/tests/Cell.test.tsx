import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Cell from '../components/Cell';
import { ICellProp } from '../types';

describe('<Cell />', () => {
  let wrapper: ShallowWrapper<ICellProp>;
  let props: ICellProp;

  beforeEach(() => {
    props = {
      displayValue: 5,
      handleCellclick: jest.fn(),
    };
    wrapper = shallow(<Cell {...props} />);
  });

  it('should initialize without crash and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to get click event', () => {
    expect(props.handleCellclick).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(props.handleCellclick).toHaveBeenCalledTimes(1);
  });

  it('should render empty cell for empty tile', () => {
    wrapper.setProps({
      ...props,
      displayValue: 0,
    });

    expect(wrapper.find('div').props().className).toBe('cell cell-empty');
    expect(wrapper.text()).toBe('');
  });
});
