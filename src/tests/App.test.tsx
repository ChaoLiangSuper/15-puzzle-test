import React from 'react';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import App from '../components/App';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Overlay from '../components/Overlay';
import * as utils from '../utils';
import { mockTiles, resetTiles } from './mock';
import { edgeLength } from '../config';
import { IAppState } from '../types';

describe('<App />', () => {
  let wrapper: ShallowWrapper<{}, IAppState>;
  let getMockTiles: jest.SpyInstance;

  beforeAll(() => {
    getMockTiles = jest
      .spyOn(utils, 'getNewTiles')
      .mockImplementation(() => mockTiles);
  });

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterAll(() => {
    getMockTiles.mockRestore();
  });

  it('should initialize without crash and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contains <Grid />', () => {
    const grid = wrapper.find(Grid);
    const gridProp = grid.props();
    expect(grid.length).toBe(1);
    expect(gridProp.edgeLength).toBe(edgeLength);
    expect(gridProp.isSolved).toBe(false);
    expect(gridProp.tiles).toBe(mockTiles);
  });

  it('should contains reset button', () => {
    const button = wrapper.find('button');
    getMockTiles.mockImplementation(() => resetTiles);
    expect(button.text()).toBe('RESET');
    button.simulate('click');
    expect(wrapper.state().tiles).toEqual(resetTiles);
  });
});

describe('Game Workflow', () => {
  let wrapper: ReactWrapper<{}, IAppState>;
  let getMockTiles: jest.SpyInstance;

  beforeAll(() => {
    getMockTiles = jest
      .spyOn(utils, 'getNewTiles')
      .mockImplementation(() => mockTiles);
  });

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterAll(() => {
    getMockTiles.mockRestore();
  });

  it('should initialize without crash and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should initialize with 15 cells and 1 empty cell', () => {
    const cells = wrapper.find(Cell);
    expect(cells.length).toBe(16);
    expect(cells.find('.cell').length).toBe(16);
    expect(cells.find('.cell.cell-empty').length).toBe(1);
  });

  it('should show win when the game is solved', () => {
    const cells = wrapper.find(Cell);
    cells.last().simulate('click');
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Overlay).text()).toBe('WIN');
  });

  it('should be able to move tile vertically', () => {
    wrapper
      .find(Cell)
      .at(10)
      .simulate('click');
    expect(wrapper.find(Cell).map(cell => cell.props().displayValue)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      0,
      12,
      13,
      14,
      11,
      15,
    ]);
  });

  it('should be able to move tile horizontally', () => {
    wrapper
      .find(Cell)
      .at(13)
      .simulate('click');
    expect(wrapper.find(Cell).map(cell => cell.props().displayValue)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      0,
      14,
      15,
    ]);
  });

  it('should not be able to move non-moveable tile', () => {
    wrapper
      .find(Cell)
      .at(0)
      .simulate('click');
    expect(wrapper.find(Cell).map(cell => cell.props().displayValue)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      0,
      15,
    ]);
  });
});
