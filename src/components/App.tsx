import React from 'react';
import Grid from './Grid';
import { getNewTiles, isMoveable, checkSolveState } from '../utils';
import { edgeLength } from '../config';
import { IAppState } from '../types';

class App extends React.Component<{}, IAppState> {
  state = {
    tiles: getNewTiles(edgeLength),
    isSolved: false,
  };

  handleCellclick = (currentCell: number) => {
    const { tiles } = this.state;
    const targetCell = tiles.indexOf(0);
    if (isMoveable(currentCell, targetCell, edgeLength)) {
      const newTiles = [...tiles];
      const temp = newTiles[currentCell];
      newTiles[currentCell] = newTiles[targetCell];
      newTiles[targetCell] = temp;
      this.setState({
        tiles: newTiles,
        isSolved: checkSolveState(newTiles),
      });
    }
  };

  resetTiles = () => {
    this.setState({
      tiles: getNewTiles(edgeLength),
      isSolved: false,
    });
  };

  render() {
    const { tiles, isSolved } = this.state;
    return (
      <main className='background'>
        <Grid
          tiles={tiles}
          edgeLength={edgeLength}
          handleCellclick={this.handleCellclick}
          isSolved={isSolved}
        />
        <button className='button-reset' onClick={this.resetTiles}>
          RESET
        </button>
      </main>
    );
  }
}

export default App;
