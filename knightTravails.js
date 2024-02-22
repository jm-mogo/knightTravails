let BOARD_SIZE = 8;
let EMPTY = 0;

const legalMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
];

function isValidMove(move) {
    if (move < 0 || move >= BOARD_SIZE) return false;
    return true;
}

const Board = new Array(BOARD_SIZE)
    .fill(null)
    .map(() => new Array(BOARD_SIZE).fill(EMPTY));

function printBoard() {
    for (let row = 0; row < BOARD_SIZE; row++) {
        console.log(Board[row].join(" "));
    }
}
