import _ from 'lodash';
import React from 'react';
import Cell from './Cell';
import Overlay from './Overlay';
import { IGridProp } from '../types';

const Grid: React.FC<IGridProp> = ({
  tiles,
  edgeLength,
  handleCellclick,
  isSolved,
}) => {
  const cells = _.map(tiles, (value, index) => (
    <React.Fragment key={index}>
      <Cell
        displayValue={value}
        handleCellclick={() => handleCellclick(index)}
      />
      {(index + 1) % edgeLength === 0 ? <div /> : null}
    </React.Fragment>
  ));

  return (
    <div className='grid'>
      {cells}
      {isSolved ? <Overlay displayText='WIN' /> : null}
    </div>
  );
};

export default Grid;
