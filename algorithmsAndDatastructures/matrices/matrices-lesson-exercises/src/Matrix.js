class Matrix {
    constructor(rows, cols) {
        this.matrix = [];
        if(rows !== undefined && cols !== undefined) {
            this.generateMatrix(rows, cols)
        }
    }

    generateMatrix(rows, cols) {
        for(let i = 1; i <= rows * cols; ++i) {
            if(i % rows === 1) {
                this.matrix.push([]);
            }
            this.matrix[this.matrix.length - 1].push(i);
        }
    }

    print() {
        console.log(this.matrix)
    }

    printColumn(col) {
        console.log(this.matrix.map(row => row[col]));
    }

    printRow(row) {
        console.log(this.matrix[row]);
    }

    alter(row, col, val) {
        this.matrix[row][col] = val;
    }

    get(row, col) {
        return this.matrix[row][col];
    }

    findCoordinate(val) {
        const rows = this.matrix.length;
        const cols = rows && this.matrix[0].length;
        for(let i = 0; i < rows; ++i) {
            for(let j = 0; j < cols; ++j) {
                if(this.matrix[i][j] == val) {
                    return {x: j, y: i};
                }
            }
        }
        return {x: -1, y: -1}
    }
}


// // Ex1
// let m = new Matrix(4, 3)
// m.print()
    
// m.alter(0, 0, m.get(1, 1))
// m.print()
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// // Ex2
// m = new Matrix(4, 3)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}


/* Do not remove the exports below */
module.exports = Matrix