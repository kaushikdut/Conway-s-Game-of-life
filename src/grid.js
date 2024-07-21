import React from "react";

const Grid = ({ grid, onClick }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid[0].length}, 20px)`,
        gap: "1px",
      }}
    >
      {grid.map((row, i) =>
        row.map((col, k) => (
          <div
            key={`${i}-${k}`}
            onClick={() => onClick(i, k)}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][k] ? "black" : "white",
              border: "solid 1px gray",
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
