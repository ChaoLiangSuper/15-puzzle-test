import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Overlay from '../components/Overlay';
import { IGridProp } from '../types';
import { edgeLength } from '../config';
import { mockTiles } from './mock';

describe('<Grid />', () => {
  let wrapper: ShallowWrapper<IGridProp>;
  let props: IGridProp;

  beforeEach(() => {
    props = {
      tiles: mockTiles,
      edgeLength,
      handleCellclick: jest.fn(),
      isSolved: false,
    };
    wrapper = shallow(<Grid {...props} />);
  });

  it('should initialize without crash and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render <Cell /> based on received tiles', () => {
    const cells = wrapper.find(Cell);
    expect(cells.length).toBe(mockTiles.length);
    expect(cells.map(cell => cell.props().displayValue)).toEqual(mockTiles);
  });

  it('should render <Overlay /> if the game if solved', () => {
    wrapper.setProps({
      ...props,
      isSolved: true,
    });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Overlay).length).toBe(1);
  });

  it('should handle cell click', () => {
    expect(props.handleCellclick).toHaveBeenCalledTimes(0);

    const cells = wrapper.find(Cell);
    cells
      .at(0)
      .props()
      .handleCellclick();
    expect(props.handleCellclick).toHaveBeenCalledTimes(1);
    expect(props.handleCellclick).toHaveBeenCalledWith(0);

    cells
      .at(5)
      .props()
      .handleCellclick();
    expect(props.handleCellclick).toHaveBeenCalledTimes(2);
    expect(props.handleCellclick).toHaveBeenCalledWith(5);
  });
});
