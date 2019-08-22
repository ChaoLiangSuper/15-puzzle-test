import _ from 'lodash';
import {
  getNewTiles,
  getPosition,
  isMoveable,
  checkSolveState,
} from '../utils';

describe('getNewTiles', () => {
  it('should return a shuffle array with 0 at the end', () => {
    let tiles = getNewTiles(3);
    expect(tiles[8]).toBe(0);
    expect(tiles.length).toBe(9);

    tiles = getNewTiles(4);
    expect(tiles[15]).toBe(0);
    expect(tiles.length).toBe(16);
  });

  it('should contain a unique number at each position', () => {
    const tiles = getNewTiles(4);
    expect(tiles.length).toBe(16);
    expect(
      _(tiles)
        .sort()
        .uniq()
        .value().length
    ).toBe(16);
  });
});

describe('getPosition', () => {
  it('should return x, y in 2D array for a given position in 1D array', () => {
    const position = getPosition(5, 4);
    expect(position).toEqual({ x: 1, y: 1 });
  });
});

describe('isMoveable', () => {
  it('should return true or false based on given position pair', () => {
    expect(isMoveable(14, 15, 4)).toBe(true);
    expect(isMoveable(14, 10, 4)).toBe(true);
    expect(isMoveable(13, 15, 4)).toBe(false);
  });
});

describe('checkSolveState', () => {
  it('should return true or false based on given tiles array', () => {
    expect(checkSolveState([1, 2, 3, 4, 5, 6, 7, 0])).toBe(true);
    expect(checkSolveState([1, 2, 3, 4, 5, 6, 0, 7])).toBe(false);
    expect(checkSolveState([1, 2, 3, 4, 5, 7, 6, 0])).toBe(false);
  });
});
