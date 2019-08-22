export interface IAppState {
  tiles: Number[];
  isSolved: boolean;
}

export interface ICellProp {
  displayValue: number;
  handleCellclick: () => void;
}

export interface IGridProp {
  tiles: number[];
  edgeLength: number;
  handleCellclick: (p: number) => void;
  isSolved: boolean;
}

export interface IOverlayProps {
  displayText: string;
}
