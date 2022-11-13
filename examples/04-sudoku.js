// N is the size of the 2D matrix   N*N
let N = 9;

function playSudoku(grid) {
    if (solveSudoku(grid, 0, 0)) {
        return grid;
    }
    else return null;
}

function solveSudoku(grid, row, col) {

    if (row == N - 1 && col == N)
        return true;

    // Check if column value  becomes 9 ,
    // we move to next row
    // and column start from 0
    if (col == N) {
        row++;
        col = 0;
    }

    // Check if the current position
    // of the grid already
    // contains value >0, we iterate
    // for next column
    if (grid[row][col] != 0)
        return solveSudoku(grid, row, col + 1);

    for (let num = 1; num < 10; num++) {

        // Check if it is safe to place
        // the num (1-9)  in the given
        // row ,col ->we move to next column
        if (isSafe(grid, row, col, num)) {

            /*  assigning the num in the current
            (row,col)  position of the grid and
            assuming our assigned num in the position
            is correct */
            grid[row][col] = num;

            // Checking for next
            // possibility with next column
            if (solveSudoku(grid, row, col + 1))
                return true;
        }

        /* removing the assigned num , since our
           assumption was wrong , and we go for next
           assumption with diff num value   */
        grid[row][col] = 0;
    }
    return false;
}

// Check whether it will be legal to assign num to the given row, col
function isSafe(grid, row, col, num) {

    // Check if we find the same num
    // in the similar row , we
    // return false
    for (let x = 0; x <= 8; x++)
        if (grid[row][x] == num)
            return false;

    // Check if we find the same num
    // in the similar column ,
    // we return false
    for (let x = 0; x <= 8; x++)
        if (grid[x][col] == num)
            return false;

    // Check if we find the same num
    // in the particular 3*3
    // matrix, we return false
    let startRow = row - row % 3,
        startCol = col - col % 3;

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (grid[i + startRow][j + startCol] == num)
                return false;

    return true;
}

module.exports = { playSudoku };