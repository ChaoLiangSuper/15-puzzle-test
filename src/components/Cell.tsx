import React from 'react';
import { ICellProp } from '../types';

const Cell: React.FC<ICellProp> = ({ displayValue, handleCellclick }) => {
  const className = displayValue === 0 ? 'cell cell-empty' : 'cell';
  return (
    <div className={className} onClick={handleCellclick}>
      {displayValue === 0 ? null : displayValue}
    </div>
  );
};

export default Cell;
