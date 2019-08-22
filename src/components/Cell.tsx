import React from 'react';

interface ICellProp {
  displayValue: number;
  handleCellclick: () => void;
}

const Cell: React.FC<ICellProp> = ({ displayValue, handleCellclick }) => {
  const className = displayValue === 0 ? 'cell empty' : 'cell';
  return (
    <div className={className} onClick={handleCellclick}>
      {displayValue === 0 ? null : displayValue}
    </div>
  );
};

export default Cell;
