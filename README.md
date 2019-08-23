# 15-puzzle-test

This game uses `yarn` as the package manager

### Install dependencies

`yarn install`

### Development Preview

`yarn start`

### Run all test

`yarn test`

### Run all test with coverage

`yarn coverage`

### Build production code

`yarn build`

### Build and server in local

`yarn serve`
This step requires `Docker`
Open browser at localhost:4000 to see the game

# GAME

## How to play this game?

This game accepts mouse click only. When clicking on one of these tiles and this tile has an empty neighbor, it will to the empty spot.

## How to win?

After moving tiles and reach this stage (showing below), this puzzle is solved.
And you will see a WIN in the middle of the game board.

```
+---+---+---+---+
| 1 | 2 | 3 | 4 |
+---+---+---+---+
| 5 | 6 | 7 | 8 |
+---+---+---+---+
| 9 | 10| 11| 12|
+---+---+---+---+
| 13| 14| 15|   |
+---+---+---+---+
```

## How to restart?

There is a button right below the game board, click it the game will be reset.
