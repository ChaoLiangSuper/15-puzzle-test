import _ from 'lodash';

export const getNewTiles = (edgeLength: number) =>
  _(Array(edgeLength * edgeLength - 1))
    .map((value, index) => index + 1)
    .shuffle()
    .concat(0)
    .value();

export const getPosition = (position: number, edgeLength: number) => ({
  x: Math.floor(position / edgeLength),
  y: position % edgeLength,
});

export const isMoveable = (
  current: number,
  target: number,
  edgeLength: number
) => {
  const currentPosition = getPosition(current, edgeLength);
  const targetPosition = getPosition(target, edgeLength);

  if (
    (currentPosition.x === targetPosition.x &&
      Math.abs(currentPosition.y - targetPosition.y) === 1) ||
    (currentPosition.y === targetPosition.y &&
      Math.abs(currentPosition.x - targetPosition.x) === 1)
  ) {
    return true;
  }

  return false;
};

export const checkSolveState = (tiles: number[]) => {
  if (tiles[tiles.length - 1] === 0) {
    console.log(tiles.slice(0, tiles.length - 2));
    return tiles
      .slice(0, tiles.length - 2)
      .every((value, index) => value === index + 1);
  }
  return false;
};
