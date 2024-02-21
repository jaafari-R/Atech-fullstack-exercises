const Matrix = require("./Matrix");

class TicTacToeAlreadyAsignedError extends Error {
}

class TicTacToe extends Matrix {
    constructor() {
        super(3,3);
    }

    loadBoard() {
        for(let i = 0; i < 3; ++i) {
            for(let j = 0; j < 3; ++j) {
                this.matrix[i][j] = '.';
            }
        }
    }

    print() {
        for(let i = 0; i < 3; ++i) {
            console.log(this.matrix[i].join(" ".repeat(5)))
        }
    }

    play(row, col, player) {
        if(this.matrix[row][col] !== '.') {
            throw new TicTacToeAlreadyAsignedError();
        }
        const playerVal = player === 1 ? 'X' : 'O';
        this.matrix[row][col] = playerVal;
        if(this.gameOver()) {
            console.log(playerVal, "has won!");
        }
    }

    gameOver() {
        for(let i = 0; i < 3; ++i) {
            const valHoriz = this.matrix[i][0];
            const valVert = this.matrix[0][i];
            let cntHoriz = 1;
            let cntVert = 1;
            for(let j = 1; j < 3; ++j) {
                if(this.matrix[i][j] === valHoriz) {
                    ++cntHoriz;
                }
                if(this.matrix[j][i] === cntVert) {
                    ++cntVert;
                }
            }
            if((valHoriz != '.' && cntHoriz === 3) || (valVert != '.' && cntVert === 3)) {
                return true;
            }
        }
        return this.matrix[1][1] !== '.' && (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2] ||
            this.matrix[1][1] === this.matrix[2][0] && this.matrix[1][1] == this.matrix[0][2]);
    }
}
    
    
// Ex7
let board = new TicTacToe()
board.loadBoard()
board.print()
console.log()

// Ex8
board.play(2, 2, 1)
board.print()
board.play(0, 0, 1)
board.print()
board.play(0, 1, 1)
board.print()
board.play(1, 2, 1)
board.print()

module.exports = TicTacToe;