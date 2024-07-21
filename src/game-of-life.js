export const generateEmptyGrid = (numRows, numCols) => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

export const calculateNextGeneration = (grid) => {
  const numRows = grid.length;
  const numCols = grid[0].length;

  const newGrid = generateEmptyGrid(numRows, numCols);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let neighbors = 0;
      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ];

      directions.forEach(([x, y]) => {
        const newI = i + x;
        const newJ = j + y;

        if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
          neighbors += grid[newI][newJ];
        }
      });

      if (grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
        newGrid[i][j] = 0;
      } else if (grid[i][j] === 0 && neighbors === 3) {
        newGrid[i][j] = 1;
      } else {
        newGrid[i][j] = grid[i][j];
      }
    }
  }

  return newGrid;
};

export const generateRandomGrid = (numRows, numCols) => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
  }
  return rows;
};
